// fatch data from database
async function getAllAnimeInfo() {
	try {
		const response = await fetch(
			`https://irinochc71.execute-api.us-east-1.amazonaws.com/anime_info`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching all anime info:", error);
		return [];
	}
}
async function getAnimeInfo(anime_name) {
	try {
		const response = await fetch(
			`https://irinochc71.execute-api.us-east-1.amazonaws.com/anime_info/${anime_name}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching " + anime_name + " info:", error);
		return [];
	}
}

async function getCharacter(anime_name) {
	try {
		const response = await fetch(
			`https://irinochc71.execute-api.us-east-1.amazonaws.com/anime_info/character/${anime_name}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching character:", error);
		return [];
	}
}

async function getGenre(anime_name) {
	try {
		const response = await fetch(
			`https://irinochc71.execute-api.us-east-1.amazonaws.com/anime_info/genre/${anime_name}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching genre:", error);
		return [];
	}
}
async function getProducer(anime_name) {
	try {
		const response = await fetch(
			`https://irinochc71.execute-api.us-east-1.amazonaws.com/anime_info/producer/${anime_name}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching producer:", error);
		return [];
	}
}
async function getStaff(anime_name) {
	try {
		const response = await fetch(
			`https://irinochc71.execute-api.us-east-1.amazonaws.com/anime_info/staff/${anime_name}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching staff:", error);
		return [];
	}
}
async function getStudio(anime_name) {
	try {
		const response = await fetch(
			`https://irinochc71.execute-api.us-east-1.amazonaws.com/anime_info/studio/${anime_name}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching studio:", error);
		return [];
	}
}
async function getTrailer(anime_name) {
	try {
		const response = await fetch(
			`https://irinochc71.execute-api.us-east-1.amazonaws.com/anime_info/trailer/${anime_name}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching studio:", error);
		return [];
	}
}

// other functions
// Assuming the missing code generates HTML for anime cards and sets it to 'html'
// const html = generateAnimeCardsHTML(animeData);

async function loadBanner() {
	try {
		const animeData = await getAllAnimeInfo();

		// Fisher-Yates shuffle
		for (let i = animeData.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			[animeData[i], animeData[randomIndex]] = [
				animeData[randomIndex],
				animeData[i],
			];
		}

		// Set the src attribute of three image elements
		for (let i = 0; i < 3; i++) {
			document
				.getElementById(`slide${i}`)
				.setAttribute("src", animeData[i].background_image);

			document.getElementById(`sildeName${i}`).textContent =
				animeData[i].anime_name;

			document.getElementById(`sys${i}`).textContent =
				animeData[i].sysnopsis.substring(0, 400) + "...";
			document
				.getElementById(`bannerLink${i}`)
				.addEventListener("click", () => {
					// Handle the click event here and set the item in sessionStorage
					sessionStorage.setItem("selectedAnimeName", animeData[i].anime_name);
				});
		}

		// Set the HTML for anime cards (Assuming you have this part implemented)
		// document.getElementById(`${listName}-animeCards`).innerHTML = html;
	} catch (error) {
		console.error("Error create anime card data:", error);
	}
}

async function updateAnimeStarRecommend() {
	let ratings = await averageStarRecommend();

	let response = "";
	const data = await getAnimeInfo(sessionStorage.getItem("selectedAnimeName"));
	const animeData = data[0];

	animeData.star_rating = ratings.averageStar;
	animeData.recommend_percent = ratings.percentageRecommend;

	let request = new XMLHttpRequest();
	request.open(
		"PUT",
		`https://irinochc71.execute-api.us-east-1.amazonaws.com/anime_info/${animeData.anime_name}`,
		true
	);
	request.onload = function () {
		response = JSON.parse(request.responseText);
		if (response.affectedRows == 1) {
			console.log("updated star recommend");
		} else {
			console.log("updated error" + response);
		}
	};
	request.send(JSON.stringify(animeData));
}

function getRandomInt(min, max) {
	// Ensure that 'min' and 'max' are integers
	min = Math.ceil(min);
	max = Math.floor(max);

	// Generate a random number between 0 (inclusive) and 1 (exclusive)
	const randomFraction = Math.random();

	// Scale and shift the random fraction to the desired range
	const randomInt = Math.floor(randomFraction * (max - min + 1)) + min;

	return randomInt;
}

function createStar(num) {
	temp = "";
	for (let i = 0; i < num; i++) {
		temp += `<div class="star-con">
		<img src="images/starFilled.png" alt="" />
	</div>`;
	}
	notFilled = 5 - num;
	for (let i = 0; i < notFilled; i++) {
		temp += `<div class="star-con">
		<img src="images/star.png" alt="" />
	</div>`;
	}
	return temp;
}

function createGenreChip(genreList) {
	let html = "";
	for (let i = 0; i < genreList.length && i < 3; i++) {
		html += `<p class="chip">${genreList[i].genre}</p>`;
	}
	return html;
}

function listInfoItems(itemsList, item) {
	let html = "";
	for (let i = 0; i < itemsList.length; i++) {
		html += `<p>${itemsList[i][item]}</p>`;
	}

	return html;
}

function handleLinkClick(animeName) {
	if (animeName) {
		sessionStorage.setItem("selectedAnimeName", animeName);
	}
}

function getAnimeNameFromSessionStorage() {
	return sessionStorage
		.getItem("selectedAnimeName")
		.replace(/%20/g, " ")
		.replace(/%204/g, "");
}

async function createAnimeCard(data, listName) {
	try {
		let num;
		const animeData = await data;
		if (listName == "suggested" || listName == "airing") {
			if (animeData.length > 4) {
				num = 4;
			} else {
				num = animeData.length;
			}
		} else {
			num = animeData.length;
		}
		let html = "";
		for (let i = 0; i < num; i++) {
			const genreData = await getGenre(animeData[i].anime_name);
			const studioData = await getStudio(animeData[i].anime_name);
			const genreChip = createGenreChip(genreData);

			const star = createStar(animeData[i].star_rating);

			html +=
				`
				<a class="toAnime" href="animeInfo.html" onclick="handleLinkClick('` +
				animeData[i].anime_name +
				`')">
					<div class="myCard">
						<div class="thumbnail">
							<img
								src="` +
				animeData[i].thumbnail +
				`"
								alt=""
							/>
							<div class="overlay">
								<h5 class="animeName">` +
				animeData[i].anime_name +
				`</h5>
								<h6 class="studio">${studioData[0].studio}</h6>
							</div>
						</div>

						<div class="info">
							<div class="myRow">
								<h5 class="episode">
									` +
				animeData[i].episode_count +
				` Episodes
								</h5>
								<div class="recommend">
									<h5>` +
				animeData[i].recommend_percent +
				`%</h5>
									<img src="images/Icon material-thumb-up.png" alt="" />
								</div>
							</div>

							<p class="source">
								source -` +
				animeData[i].source_origin +
				`
							</p>

							<div class="rating">
								` +
				star +
				`
								<h6 id="ratingValue">` +
				animeData[i].star_rating +
				`</h6>
							</div>

							<p class="sysnopsis">` +
				animeData[i].sysnopsis +
				`</p>

								<div class="genre">
									<div class="chipContainer">` +
				genreChip +
				`</div>

								</div>
							</div>
						</div>
					</div>
				</a>
			`;
		}

		document.getElementById(`${listName}-animeCards`).innerHTML = html;
	} catch (error) {
		console.error("Error create anime card data:", error);
	}
}

async function loadAnimeInfo() {
	animeName = getAnimeNameFromSessionStorage();
	await updateAnimeStarRecommend();

	try {
		const animeData = await getAnimeInfo(animeName);
		const characterData = await getCharacter(animeName);
		const genreData = await getGenre(animeName);
		const producerData = await getProducer(animeName);
		const staffData = await getStaff(animeName);
		const studioData = await getStudio(animeName);
		const trailerData = await getTrailer(animeName);

		//background image
		html = `<img src="${animeData[0].background_image}" alt="" />`;
		document.getElementById("backgroundImage").innerHTML = html;

		//thumbnail
		document.getElementById("thumbnail").src = animeData[0].thumbnail;

		//moreinfo
		html = `<div class="info-item">
		<h6>Format</h6>
		<p>${animeData[0].format_type}</p>
	</div>
	<div class="info-item">
		<h6>Episodes</h6>
		<p>${animeData[0].episode_count}</p>
	</div>
	<div class="info-item">
		<h6>Episode Duration</h6>
		<p>${animeData[0].episode_duration}</p>
	</div>
	<div class="info-item">
		<h6>Status</h6>
		<p>${animeData[0].completion_status}</p>
	</div>
	<div class="info-item">
		<h6>Source</h6>
		<p>${animeData[0].source_origin}</p>
	</div>
	<div class="info-item">
		<h6>Genres</h6>
		${listInfoItems(genreData, "genre")}
	</div>
	<div class="info-item">
		<h6>Studios</h6>
		${listInfoItems(studioData, "studio")}
	</div>
	<div class="info-item">
		<h6>Producers</h6>
		${listInfoItems(producerData, "producer")}
	</div>`;
		document.getElementById("moreInfo").innerHTML = html;

		//anime title
		html = `<h4 class="animeName">${animeName}</h4>
		<div class="rating">
			<h6 class="star">${animeData[0].star_rating}</h6>
			<img src="images/starFilled.png" alt="" />
		</div>
		<div class="rating">
			<h6 class="recommend">${animeData[0].recommend_percent}%</h6>
			<img src="images/Icon material-thumb-up.png" alt="" />`;
		document.getElementById("title").innerHTML = html;

		//sysnopsis
		html = `<p>${animeData[0].sysnopsis}</p>`;
		document.getElementById("sysnopsis").innerHTML = html;

		//characters
		html = "";
		for (let i = 0; i < 4; i++) {
			html += `<div class="row-card">
			<div class="card-left">
				<div class="card-left-img-con">
					<img src="${characterData[i].character_image}" alt="" />
				</div>
				<div class="card-left-info">
					<h5>${characterData[i].character_name}</h5>
					<p>${characterData[i].character_role}</p>
				</div>
			</div>
			<div class="staff">
				<div class="staff-info">
					<h5>${characterData[i].voice_actor}</h5>
					<p>${characterData[i].voice_actor_nationality}</p>
				</div>
				<div class="staff-img-con">
					<img
						src="${characterData[i].voice_actor_image}"
						alt=""
					/>
				</div>
			</div>
		</div>`;
		}
		document.getElementById("characters").innerHTML = html;

		//staffs
		html = "";
		for (let i = 0; i < 4; i++) {
			html += `<div class="row-card">
			<div class="card-left">
				<div class="card-left-img-con">
					<img
						src="${staffData[i].staff_image}"
						alt=""
					/>
				</div>
				<div class="card-left-info">
					<h5>${staffData[i].staff_name}</h5>
					<p>${staffData[i].staff_role}</p>
					
				</div>
			</div>
		</div>`;
		}
		document.getElementById("staffs").innerHTML = html;

		//trailer
		html = ``;
		for (let i = 0; i < 1; i++) {
			html += `<iframe
			src="${trailerData[i].trailer}"
			frameborder="0"
			allowfullscreen="allowfullscreen"
		></iframe>`;
		}
		document.getElementById("trailer").innerHTML = html;

		//review
		html = `
        <h5 class="header">Reviews</h5>
        <div class="rating-star">
            <h6>${animeData[0].star_rating}</h6>
            <img src="images/starFilled.png" alt="" />
        </div>
        <div class="recommend">
            <h6>${animeData[0].recommend_percent}%</h6>
            <img src="images/Icon material-thumb-up.png" alt="" />
        </div>`;
		document.getElementById("review-header").innerHTML = html;

		loadReivew();
		/////////////////////////////////////////////////////
	} catch (error) {
		console.error("Error load anime info data:", error);
	}
}

async function loadAllCharacters() {
	const characterData = await getCharacter(animeName);

	html = "";
	for (let i = 0; i < characterData.length; i++) {
		html += `<div class="row-card">
			<div class="card-left">
				<div class="card-left-img-con">
					<img src="${characterData[i].character_image}" alt="" />
				</div>
				<div class="card-left-info">
					<h5>${characterData[i].character_name}</h5>
					<p>${characterData[i].character_role}</p>
				</div>
			</div>
			<div class="staff">
				<div class="staff-info">
					<h5>${characterData[i].voice_actor}</h5>
					<p>${characterData[i].voice_actor_nationality}</p>
				</div>
				<div class="staff-img-con">
					<img
						src="${characterData[i].voice_actor_image}"
						alt=""
					/>
				</div>
			</div>
		</div>`;
	}
	document.getElementById("characters-tab-item").innerHTML = html;
}

async function loadAllStaffs() {
	const staffData = await getStaff(animeName);

	html = "";
	for (let i = 0; i < staffData.length; i++) {
		html += `<div class="row-card">
			<div class="card-left">
				<div class="card-left-img-con">
					<img
						src="${staffData[i].staff_image}"
						alt=""
					/>
				</div>
				<div class="card-left-info">
					<h5>${staffData[i].staff_name}</h5>
					<p>${staffData[i].staff_role}</p>
					
				</div>
			</div>
		</div>`;
	}
	document.getElementById("staffs-tab-item").innerHTML = html;
}
async function loadAllTrailers() {
	const trailerData = await getTrailer(animeName);

	html = ``;
	for (let i = 0; i < trailerData.length; i++) {
		html += `<iframe
		src="${trailerData[i].trailer}"
		frameborder="0"
		allowfullscreen="allowfullscreen"
	></iframe>`;
	}
	document.getElementById("trailers-tab-item").innerHTML = html;
}

async function loadHomePage() {
	const animeData = await getAllAnimeInfo();
	let airList = [];

	for (let i = animeData.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[animeData[i], animeData[j]] = [animeData[j], animeData[i]]; // Swap elements
	}
	await createAnimeCard(animeData, "suggested");

	for (let i = 0; i < animeData.length; i++) {
		if (animeData[i].completion_status == "Airing") {
			airList.push(animeData[i]);
		}
	}
	await createAnimeCard(airList, "airing");
}
//changing tabs
$(document).ready(function () {
	$(".tabs a").click(function (e) {
		e.preventDefault();
		let target = $(this).attr("href");
		$(".tab-content").removeClass("active");
		$(target).addClass("active");
	});
});

$(document).ready(function () {
	$(".review-text").on("click", function () {
		$(this).toggleClass("expand");
	});
});
