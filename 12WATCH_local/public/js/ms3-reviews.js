const star = "images/starFilled.png";
const starBW = "images/star.png";
let rating = 0;

const currentDate = new Date();

// Array of month names
const monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

// Extract the day, month, and year from the current date
const day = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const year = currentDate.getFullYear();

// Format the date as "dd Mmm yyyy"
const formattedDate = `${day.toString().padStart(2, "0")} ${
	monthNames[monthIndex]
} ${year}`;

//This function allows the user to mouse hover the black and white star
//so that it will turn to a colored version when hovered
function rateIt(element) {
	var num = element.getAttribute("value");
	var classname = element.getAttribute("class");
	var stars = document.getElementsByClassName(classname);
	var classTarget = "." + classname;

	// This is another way of writing 'for' loop, which initialises the
	// star images to use black and white.
	for (let star of stars) {
		star.setAttribute("src", starBW);
	}
	changeStarImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when
// the mouse cursor hovers over the star image.
function changeStarImage(num, classTarget) {
	switch (eval(num)) {
		case 1:
			document
				.querySelector(classTarget + "[value='1']")
				.setAttribute("src", star);
			rating = 1;
			break;
		case 2:
			document
				.querySelector(classTarget + "[value='1']")
				.setAttribute("src", star);
			document
				.querySelector(classTarget + "[value='2']")
				.setAttribute("src", star);
			rating = 2;
			break;
		case 3:
			document
				.querySelector(classTarget + "[value='1']")
				.setAttribute("src", star);
			document
				.querySelector(classTarget + "[value='2']")
				.setAttribute("src", star);
			document
				.querySelector(classTarget + "[value='3']")
				.setAttribute("src", star);
			rating = 3;
			break;
		case 4:
			document
				.querySelector(classTarget + "[value='1']")
				.setAttribute("src", star);
			document
				.querySelector(classTarget + "[value='2']")
				.setAttribute("src", star);
			document
				.querySelector(classTarget + "[value='3']")
				.setAttribute("src", star);
			document
				.querySelector(classTarget + "[value='4']")
				.setAttribute("src", star);
			rating = 4;
			break;
		case 5:
			document
				.querySelector(classTarget + "[value='1']")
				.setAttribute("src", star);
			document
				.querySelector(classTarget + "[value='2']")
				.setAttribute("src", star);
			document
				.querySelector(classTarget + "[value='3']")
				.setAttribute("src", star);
			document
				.querySelector(classTarget + "[value='4']")
				.setAttribute("src", star);
			document
				.querySelector(classTarget + "[value='5']")
				.setAttribute("src", star);
			rating = 5;
			break;
	}
}

//This function displayS the correct number of colored star
//based on the restaurant rating that is given in the user review
function displayColorStar(classname, num) {
	var pop = document.getElementsByClassName(classname);
	var classTarget = "." + classname;
	for (let p of pop) {
		p.setAttribute("src", starBW);
	}
	changeStarImage(num, classTarget);
}

// returns average star rating of the anime and recomend percentage rounds to nearest whole number
async function averageStarRecommend() {
	const reviews = await getAllReviews(
		sessionStorage.getItem("selectedAnimeName")
	);
	let totalStar = 0;
	for (let i = 0; i < reviews.length; i++) {
		totalStar += parseInt(reviews[i].star_rating);
	}
	let totalReccomend = 0;
	for (let i = 0; i < reviews.length; i++) {
		if (reviews[i].recommend == "yes") {
			totalReccomend += 1;
		}
	}
	let totalNotReccomend = 0;
	for (let i = 0; i < reviews.length; i++) {
		if (reviews[i].recommend == "no") {
			totalNotReccomend += 1;
		}
	}
	averageStar = Math.round(totalStar / reviews.length);
	percentageRecommend = Math.round(
		(totalReccomend / (totalReccomend + totalNotReccomend)) * 100
	);

	return {
		averageStar: averageStar,
		percentageRecommend: percentageRecommend,
	};
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
		`http://localhost:3000/anime_info/${animeData.anime_name}`,
		true
	);

	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
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

//crud
async function getAllReviews(anime_name) {
	try {
		const response = await fetch(`http://localhost:3000/review/${anime_name}`);
		const review = await response.json();
		return review;
	} catch (error) {
		console.error("Error fetching " + anime_name + " review:", error);
		return [];
	}
}

async function getMyReview(anime_name, username) {
	try {
		const response = await fetch(
			`http://localhost:3000/review/${anime_name}/${username}`
		);
		const data = await response.json();
		const review = data[0];
		console.log(review);
		return review;
	} catch (error) {
		console.error(`Error fetching ${username}, ${anime_name} review:`, error);
	}
}

function addReview(event, all) {
	event.preventDefault();
	let response = "";

	const recommendedRadio = document.getElementById(`recommended${all}`);
	const notRecommendedRadio = document.getElementById(`notRecommended${all}`);
	const spoilerCheckbox = document.getElementById(`spoilerCheckbox${all}`);

	// Check which radio button is checked
	if (recommendedRadio.checked) {
		recommend = "yes";
	} else if (notRecommendedRadio.checked) {
		recommend = "no";
	} else {
		return alert("please select weather you recommend this anime or not");
	}

	//check if there is spoiler
	if (spoilerCheckbox.checked) {
		spoiler = "yes";
	} else {
		spoiler = "no";
	}

	let jsonData = new Object();
	jsonData.anime_name = sessionStorage.getItem("selectedAnimeName");
	jsonData.username = sessionStorage.getItem("username");
	jsonData.recommend = recommend;
	jsonData.spoiler = spoiler;
	jsonData.date = formattedDate;
	jsonData.star_rating = `${rating}`;
	jsonData.content = document.getElementById(`content${all}`).value;
	jsonData.upvote = "0";

	console.log(jsonData);

	let request = new XMLHttpRequest();
	request.open(
		"POST",
		`http://localhost:3000/review/${jsonData.anime_name}/${jsonData.username}`,
		true
	);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = function () {
		response = JSON.parse(request.responseText);
		if (response.message == "Review written") {
			updateAnimeStarRecommend();
			alert("Review posted successfully!");
			location.reload();
		} else {
			alert("Error. Unable to post review. " + response.message);
		}
	};
	request.send(JSON.stringify(jsonData));
}

function editReview(event) {
	event.preventDefault();
	let response = "";
	let username = sessionStorage.getItem("username");

	const recommendedRadio = document.getElementById("recommended");
	const notRecommendedRadio = document.getElementById("notRecommended");
	const spoilerCheckbox = document.getElementById("spoilerCheckbox");

	// Check which radio button is checked
	if (recommendedRadio.checked) {
		recommend = "yes";
	} else if (notRecommendedRadio.checked) {
		recommend = "no";
	} else {
		return alert("please select weather you recommend this anime or not");
	}

	//check if there is spoiler
	if (spoilerCheckbox.checked) {
		spoiler = "yes";
	} else {
		spoiler = "no";
	}

	let jsonData = new Object();
	jsonData.recommend = recommend;
	jsonData.spoiler = spoiler;
	jsonData.date = formattedDate;
	jsonData.star_rating = `${rating}`;
	jsonData.content = document.getElementById("content").value;
	jsonData.upvote = "0";

	let request = new XMLHttpRequest();
	request.open(
		"PUT",
		`http://localhost:3000/review/${animeName}/${username}`,
		true
	);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = function () {
		response = JSON.parse(request.responseText);

		if (response.message != "Internal Server Error") {
			alert("Review updated successfully.");
			location.reload();
		} else {
			alert("Error. Unable to update review.");
		}
	};

	request.send(JSON.stringify(jsonData));
}

function deleteReview() {
	let response = "";
	let jsonData = new Object();
	let username = sessionStorage.getItem("username");

	jsonData.username = username;
	jsonData.anime_name = animeName;

	let request = new XMLHttpRequest();
	request.open("DELETE", "http://localhost:3000/review", true);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = function () {
		response = JSON.parse(request.responseText);
		if (response.message == "Review deleted") {
			alert("Review deleted successfully.");
			location.reload();
		} else {
			alert("Error. Unable to delete review." + response);
		}
	};
	request.send(JSON.stringify(jsonData));
}

function deleteAllReview() {
	let response = "";
	let jsonData = new Object();
	let username = sessionStorage.getItem("username");

	jsonData.username = username;

	let request = new XMLHttpRequest();
	request.open("DELETE", "http://localhost:3000/allReview", true);
	request.onload = function () {
		response = JSON.parse(request.responseText);
		if (response.message == "All reviews for the username have been deleted") {
			console.log("All review deleted successfully.");
		} else {
			alert("Error. Unable to delete all review." + response);
		}
	};
	request.send(JSON.stringify(jsonData));
}

async function getReviewPfp(username) {
	try {
		const response = await fetch(`http://localhost:3000/userImg/${username}`);
		const data = await response.json();
		if (data.length !== 0) {
			return data[0].profilePic;
		} else {
			console.log(data);
			alert(response.statusText); // Display the error message
			return null; // or handle the error in some other way
		}
	} catch (error) {
		console.error("Error fetching profile picture:", error);
		return null; // or handle the error in some other way
	}
}

// loading of information
async function loadReivew(all) {
	const reviews = await getAllReviews(animeName);
	averageStarRecommend();

	try {
		let html = ``;
		let recommendhtml = "";
		let spoilerhtml = "";
		let num;
		let div;

		//check if load all reviews
		if (all == "all") {
			num = reviews.length;
			div = "reviews-tab-item";
		} else {
			if (reviews.length < 4) {
				num = reviews.length;
			} else {
				num = 4;
			}
			div = "all-review";
		}

		//check if there are reviews
		if (reviews.length == 0) {
			html = `<p>There are no reviews yet!</p>`;
			document.getElementById(div).innerHTML = html;
		}

		for (let i = 0; i < num; i++) {
			if (reviews[i].username == sessionStorage.getItem("username")) {
				continue;
			}
			let pfp = await getReviewPfp(reviews[i].username);

			if (reviews[i].recommend == "yes") {
				recommendhtml = `<div class="recommend-con">
                    <h4>Recommended</h4>
                    <img src="images/Icon material-thumb-up.png" alt="" />
                </div>;`;
			} else {
				recommendhtml = `<div class="recommend-con">
                <h4 style="color: rgb(236, 38, 38)">Not Recommended</h4>
                <img src="images/Icon material-thumb-down.png" alt="" />
            </div>;`;
			}

			if (reviews[i].spoiler == "yes") {
				spoilerhtml = `<h4 class="spoiler">Spoiler</h4>`;
			}

			html += `<div class="review">
            <div class="pfp-con">
                <img
						src="${pfp}"
                    alt=""
                />
            </div>
            <div class="review-con">
                <div class="top">
                    <div style="display: flex; align-items: baseline">
                        <h5 class="username">${reviews[i].username}</h5>
                        ${recommendhtml}
                        ${spoilerhtml}
                    </div>

                    <p class="date">${reviews[i].date}</p>
                </div>
                <div class="review-star">
                    ${createStar(reviews[i].star_rating)}
                    <p>${reviews[i].star_rating}</p>
                </div>
                <p class="review-text">${reviews[i].content}</p>
            </div>
        </div>`;
		}
		document.getElementById(div).innerHTML = html;
	} catch (error) {
		console.error("Error fetching " + animeName + " review:", error);
		return [];
	}
}

async function loadMyReview(all) {
	if (sessionStorage.getItem("username") == null) {
		return;
	}
	const username = sessionStorage.getItem("username");
	const animeName = sessionStorage.getItem("selectedAnimeName");
	const myReview = await getMyReview(animeName, username);
	if (all == undefined) {
		all = "";
	}

	try {
		let html = "";
		let div = "";
		if (all == "all") {
			div = "myReviews-tab-item";
		} else {
			div = "myReview-con";
		}
		//load form for user to write review is there isnt a review yet
		if (myReview == undefined) {
			html += `<div class="review">
			<div class="pfp-con">
				<img
					src="${JSON.parse(sessionStorage.getItem("profileImg"))[0].profilePic}"
					alt=""
				/>
			</div>
			<form action="">
				<div class="review-con">
					<div class="top">
						<div style="display: flex; align-items: baseline">
							<h5 class="username">${username}</h5>
		
							<label for="recommended${all}">
								<input
									type="radio"
									id="recommended${all}"
									name="recommend"
									value="Recommended"
								/>
								<img src="images/Icon material-thumb-up.png" alt="Thumb Up" />
							</label>
		
							<label for="notRecommended${all}">
								<input
									type="radio"
									id="notRecommended${all}"
									name="recommend"
									value="Not recommended"
								/>
		
								<img src="images/Icon material-thumb-down.png" alt="Thumb Down" />
							</label>
		
							<label>
								<input
									type="checkbox"
									name="interests"
									value="spoiler"
									id="spoilerCheckbox${all}"
								/>
								<h4 class="spoiler">spoiler</h4>
							</label>
						</div>
						<p class="date">${formattedDate}</p>
					</div>
					<div class="review-star">
						<div class="star-con">
						<img
						src=${star}
						class="pop"
						value="1"
						onmouseover="rateIt(this)"
					/>
						</div>
						<div class="star-con">
						<img
						src=${star}
						class="pop"
						value="2"
						onmouseover="rateIt(this)"
					/>
						</div>
						<div class="star-con">
						<img
						src=${star}
						class="pop"
						value="3"
						onmouseover="rateIt(this)"
					/>
						</div>
						<div class="star-con">
						<img
						src=${star}
						class="pop"
						value="4"
						onmouseover="rateIt(this)"
					/>
						</div>
						<div class="star-con">
						<img
						src=${star}
						class="pop"
						value="5"
						onmouseover="rateIt(this)"
					/>
						</div>
					</div>
		
					<input
						id="content${all}"
						type="text"
						autocomplete="off"
						placeholder="click to write a review"
					/>
		
					<div class="button-con">
						<button id="cancel">cancel</button
						><button id="post" onclick="addReview(event,'${all}')">post</button>
					</div>
				</div>
			</form>
		</div>`;
		}
		// load the user review if already have the review
		else {
			let recommendhtml = "";
			let spoilerhtml = "";

			if (myReview.recommend == "yes") {
				recommendhtml = `<div class="recommend-con">
                    <h4>Recommended</h4>
                    <img src="images/Icon material-thumb-up.png" alt="" />
                </div>;`;
			} else {
				recommendhtml = `<div class="recommend-con">
                <h4 style="color: rgb(236, 38, 38)">Not Recommended</h4>
                <img src="images/Icon material-thumb-down.png" alt="" />
            </div>;`;
			}
			if (myReview.spoiler == "yes") {
				spoilerhtml = `<h4 class="spoiler">Spoiler</h4>`;
			}

			html += `<div class="review">
            <div class="pfp-con">
                <img
                    src="${
											JSON.parse(sessionStorage.getItem("profileImg"))[0]
												.profilePic
										}"
                    alt=""
                />
            </div>
            <div class="review-con">
                <div class="top">
                    <div style="display: flex; align-items: baseline">
                        <h5 class="username">${myReview.username}</h5>
                        ${recommendhtml}
                        ${spoilerhtml}
                    </div>

					<div class="top-right">
                    <p class="date">${myReview.date}</p>
					<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle no-caret" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <img src="images/Icon feather-more-vertical.png" alt="Dropdown Button" class="image-icon">
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
    <!-- Dropdown items here -->
    <a class="dropdown-item" onclick="loadEditReview('${all}')">Edit</a>
    <a class="dropdown-item" onclick="deleteReview()">Delete</a>
  </div>
</div></div>
                </div>
                <div class="review-star">
                    ${createStar(myReview.star_rating)}
                    <p>${myReview.star_rating}</p>
                </div>
                <p class="review-text">${myReview.content}</p>
            </div>
        </div>`;
		}
		document.getElementById(div).innerHTML = html;
	} catch (error) {
		console.error("Error fetching " + username + animeName + " review:", error);
		return [];
	}
}

async function loadEditReview(all) {
	username = sessionStorage.getItem("username");
	const myReview = await getMyReview(animeName, username);

	try {
		let html = "";
		let div = "";
		let recommended;
		let notRecommended;
		let spoiler = "";

		if (all == "all") {
			div = "myReviews-tab-item";
		} else {
			div = "myReview-con";
		}

		if (myReview.recommend == "yes") {
			recommended = "checked";
		} else {
			notRecommended = "checked";
		}

		if (myReview.spoiler == "yes") {
			spoiler = "checked";
		}

		html += `<div class="review">
			<div class="pfp-con">
				<img
					src="${JSON.parse(sessionStorage.getItem("profileImg"))[0].profilePic}"
					alt=""
				/>
			</div>
			<form action="">
				<div class="review-con">
					<div class="top">
						<div style="display: flex; align-items: baseline">
							<h5 class="username">${username}</h5>
	
							<label for="recommended">
								<input
									type="radio"
									id="recommended"
									name="recommend"
									value="Recommended"
									${recommended}
								/>
								<img
									src="images/Icon material-thumb-up.png"
									alt="Thumb Up"
								/>
							</label>
	
							<label for="notRecommended">
								<input
									type="radio"
									id="notRecommended"
									name="recommend"
									value="Not recommended"
									${notRecommended}
								/>
	
								<img
									src="images/Icon material-thumb-down.png"
									alt="Thumb Down"
								/>
							</label>
	
							<label>
								<input
									type="checkbox"
									name="interests"
									value="spoiler"
									id="spoilerCheckbox"
									${spoiler}
								/>
								<h4 class="spoiler">spoiler</h4>
							</label>
						</div>
						<p class="date">${formattedDate}</p>
					</div>
					
					<div class="review-star">
						<div class="star-con">
						<img
						src=${star}
						class="pop"
						value="1"
						onmouseover="rateIt(this)"
					/>
						</div>
						<div class="star-con">
						<img
						src=${star}
						class="pop"
						value="2"
						onmouseover="rateIt(this)"
					/>
						</div>
						<div class="star-con">
						<img
						src=${star}
						class="pop"
						value="3"
						onmouseover="rateIt(this)"
					/>
						</div>
						<div class="star-con">
						<img
						src=${star}
						class="pop"
						value="4"
						onmouseover="rateIt(this)"
					/>
						</div>
						<div class="star-con">
						<img
						src=${star}
						class="pop"
						value="5"
						onmouseover="rateIt(this)"
					/>
						</div>
					</div>
	
					<input id="content" type="text" autocomplete="off" placeholder="click to write a review..." value="${
						myReview.content
					}"/>
	
					<div class="button-con">
						<button id="cancel">cancel</button><button id="post" onclick="editReview(event)">edit</button>
					</div>
				</div>
			</form>
		</div>`;
		document.getElementById(div).innerHTML = html;
	} catch (error) {
		console.error("Error fetching " + username + animeName + " review:", error);
		return [];
	}
}
