function addToList(listName) {
	let response = "";

	let jsonData = new Object();
	jsonData.username = sessionStorage.getItem("username");
	jsonData.anime_name = sessionStorage.getItem("selectedAnimeName");
	jsonData.list_name = listName;

	let request = new XMLHttpRequest();
	request.open("POST", "http://localhost:3000/list/add", true);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = function () {
		response = JSON.parse(request.responseText);
		console.log(response);
		if (
			response.message == "Anime added to list" ||
			response.message == "List updated"
		) {
			alert(`${jsonData.anime_name} is add to ${listName}`);
		} else {
			alert("Error. Unable to add to list. " + response.message);
		}
	};
	request.send(JSON.stringify(jsonData));
}

function getList(listName) {
	let jsonData = new Object();
	jsonData.username = sessionStorage.getItem("username");
	jsonData.list_name = listName;

	let request = new XMLHttpRequest();
	request.open("POST", "http://localhost:3000/list", true);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = async function () {
		let response = JSON.parse(request.responseText);
		listData = response;
		listItem = [];
		if (listData.length > 0) {
			for (let i = 0; i < listData.length; i++) {
				animeInfo = await getAnimeInfo(listData[i].anime_name);
				listItem.push(animeInfo[0]);
			}
			createAnimeCard(listItem, listName);
		} else {
			console.log("nothing");
			document.getElementById(
				`${listName}-animeCards`
			).innerHTML = `<p>You haven't added anything to ${listName} yet!</p>`;
		}
	};

	request.send(JSON.stringify(jsonData));
}

function addToLoved() {
	let response = "";

	let jsonData = new Object();
	jsonData.username = sessionStorage.getItem("username");
	jsonData.anime_name = sessionStorage.getItem("selectedAnimeName");
	jsonData.list_name = "loved";

	let request = new XMLHttpRequest();
	request.open("POST", "http://localhost:3000/list/add", true);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = function () {
		response = JSON.parse(request.responseText);
		console.log(response);
		if (response.message == "anime added to list!") {
			alert(`${jsonData.anime_name} is add to ${listName}`);
		} else {
			alert("Error. Unable to add to list. " + response.message);
		}
	};
	request.send(JSON.stringify(jsonData));
}

function deleteAllList() {
	let response = "";
	let jsonData = new Object();
	let username = sessionStorage.getItem("username");

	jsonData.username = username;

	let request = new XMLHttpRequest();
	request.open("DELETE", "http://localhost:3000/list", true);
	request.onload = function () {
		response = JSON.parse(request.responseText);
		if (response.message == "all anime records for the username deleted!") {
			console.log("all list deleted");
		} else {
			alert("Error. Unable to delete all list." + response);
		}
	};
	request.send(JSON.stringify(jsonData));
}
