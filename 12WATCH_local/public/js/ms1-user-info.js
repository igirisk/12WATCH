//display Login register form
const formOverlay = document.getElementById("form-overlay");
const signInForm = document.getElementById("signIn");
const registerForm = document.getElementById("register");
let background = "";
let pfp = "";

function closePopup() {
	formOverlay.style.display = "none";
	signInForm.style.display = "none";
	registerForm.style.display = "none";
}

function openSignIn() {
	formOverlay.style.display = "block";
	signInForm.style.display = "block";
	registerForm.style.display = "none";
}

function openRegister() {
	formOverlay.style.display = "block";
	signInForm.style.display = "none";
	registerForm.style.display = "block";
}

formOverlay.addEventListener("click", closePopup);

function setNavBar() {
	if (sessionStorage.getItem("username") == null) {
		document.getElementById(
			"navUser"
		).innerHTML = `<a class="nav-link" href="#" onclick="openSignIn()">Login</a>`;
	} else {
		let tmp;
		if (sessionStorage.getItem("profileImg") !== null) {
			tmp = JSON.parse(sessionStorage.getItem("profileImg"))[0];
			tmp = tmp.profilePic;
		} else {
			tmp = "images/pfp.png";
		}
		document.getElementById("navUser").innerHTML = `
							<div class="dropdown">
								<button
									class="btn btn-custom dropdown-toggle"
									type="button"
									id="dropdownMenuButton-profile"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
								<img id="pfp" src="${tmp}" alt="">
								</button>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton-profile">
									<a class="dropdown-item" href="profile.html"><img src="images/Icon material-person.png" alt="">Profile</a>
									<a class="dropdown-item" href="watchList.html"><img src="images/Icon awesome-th-list.png" alt="">Watch List</a>
									<a class="dropdown-item" onclick="logOut()"><img src="images/Icon material-exit-to-app gery.png" alt="">Logout</a>
								</div>
							</div>`;
	}
}

function loadUserInfo() {
	if (document.getElementById("head-username")) {
		document.getElementById("head-username").textContent =
			sessionStorage.getItem("username");
	}
	if (document.getElementById("update-email")) {
		document.getElementById("update-email").placeholder =
			sessionStorage.getItem("email");
	}
	getUserImge(sessionStorage.getItem("username"));
	let tmp = JSON.parse(sessionStorage.getItem("profileImg"));
	if (sessionStorage.getItem("profileImg") !== null) {
		document.getElementById("backgroundImage").src = tmp[0].backgroundImg;
		document.getElementById("profileImage").src = tmp[0].profilePic;
	} else {
		document.getElementById("backgroundImage").src = "images/pfp.png";
		document.getElementById("profileImage").src = "images/pfp.png";
	}
}

function clearForm() {
	document.getElementById("update-email").value = "";
	document.getElementById("update-newPassword").value = "";
	document.getElementById("update-confirmPassword").value = "";
}

function logOut() {
	sessionStorage.removeItem("username");
	sessionStorage.removeItem("email");
	sessionStorage.removeItem("token");
	sessionStorage.removeItem("profileImg");
	window.location.href = "index.html";
}

function encodeBack() {
	let selectedfile = document.getElementById("backgroundImgInput").files;
	if (selectedfile.length > 0) {
		let imageFile = selectedfile[0];
		let fileReader = new FileReader();
		fileReader.onload = function (fileLoadedEvent) {
			background = fileLoadedEvent.target.result;
			document.getElementById("backgroundImage").src = background;
		};
		fileReader.readAsDataURL(imageFile);
	}
}

function encodePfp() {
	let selectedfile = document.getElementById("profileImgInput").files;
	if (selectedfile.length > 0) {
		let imageFile = selectedfile[0];
		let fileReader = new FileReader();
		fileReader.onload = function (fileLoadedEvent) {
			pfp = fileLoadedEvent.target.result;
			document.getElementById("profileImage").src = pfp;
		};
		fileReader.readAsDataURL(imageFile);
	}
}

//CRUD
async function getUserImge(username) {
	try {
		const response = await fetch(`http://localhost:3000/userImg/${username}`);
		if (!response.ok) {
			throw new Error("Failed to fetch user image.");
		}
		const data = await response.json();
		if (data.length !== 0) {
			sessionStorage.setItem("profileImg", JSON.stringify(data));
		} else {
			console.log(data);
			alert("No user image found.");
		}
	} catch (error) {
		console.error("Error:", error.message);
		alert("An error occurred while fetching user image.");
	}
}

function addUserImg(username) {
	let response = "";

	let jsonData = new Object();
	jsonData.username = username;
	jsonData.profilePic = "images/pfp.png";
	jsonData.backgroundImg = "images/banner.png";

	let request = new XMLHttpRequest();
	request.open("POST", "http://localhost:3000/userImg", true);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = function () {
		response = JSON.parse(request.responseText);
		console.log(response);
		if ((response.affectedRows = 1)) {
			console.log("successful");
		} else {
			console.log(response);
		}
	};
	request.send(JSON.stringify(jsonData));
}

function updateProfilePic(username) {
	let response = "";

	let jsonData = new Object();
	jsonData.profilePic = pfp;
	let request = new XMLHttpRequest();
	request.open(
		"PUT",
		`http://localhost:3000/userImg/profilePic/${username}`,
		true
	);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = function () {
		response = JSON.parse(request.responseText);
		if (response.affectedRows == 1) {
			setTimeout(function () {
				alert("Profile picture updated");
				getUserImge(username);
			}, 3000);
		} else {
			console.log(response);
		}
	};
	request.send(JSON.stringify(jsonData));
}

function updateBackgroundImg(username) {
	let response = "";

	let jsonData = new Object();
	jsonData.backgroundImg = background;
	let request = new XMLHttpRequest();
	request.open(
		"PUT",
		`http://localhost:3000/userImg/backgroundImg/${username}`,
		true
	);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = function () {
		response = JSON.parse(request.responseText);
		if (response.affectedRows == 1) {
			setTimeout(function () {
				alert("backgroundImg updated");
				getUserImge(username);
			}, 3000);
		} else {
			console.log(response);
		}
	};
	request.send(JSON.stringify(jsonData));
}

function deleteUserImg(username) {
	let request = new XMLHttpRequest();
	request.open("DELETE", `http://localhost:3000/userImg/${username}`, true);
	request.onload = function () {
		response = JSON.parse(request.responseText);
		if (response.affectedRows == 1) {
			console.log(" delete user successful");
		} else {
			console.log(response);
		}
	};
	request.send();
}

function register(event) {
	event.preventDefault();
	let response = "";

	let jsonData = new Object();

	//input vailidation
	let hasError = false;
	if (document.getElementById("username").value != "") {
		jsonData.username = document.getElementById("username").value;
		document.getElementById("usernameError").style.display = "none";
	} else {
		document.getElementById("usernameError").textContent =
			"Please input a username";
		document.getElementById("usernameError").style.display = "block";
		hasError = true;
	}
	if (document.getElementById("email").value.includes("@")) {
		jsonData.email = document.getElementById("email").value;
		document.getElementById("emailError").style.display = "none";
	} else {
		document.getElementById("emailError").textContent =
			"Please input a vaild email";
		document.getElementById("emailError").style.display = "block";
		hasError = true;
	}

	if (document.getElementById("password").value.length > 5) {
		jsonData.password = document.getElementById("password").value;
		document.getElementById("passwordError").style.display = "none";
	} else {
		document.getElementById("passwordError").textContent =
			"Use 6 characters or more for your password";
		document.getElementById("passwordError").style.display = "block";
		hasError = true;
	}

	if (jsonData.password == document.getElementById("confirmPassword").value) {
		document.getElementById("confirmPasswordError").style.display = "none";
	} else {
		document.getElementById("confirmPasswordError").textContent =
			"Password do not match. Try again";
		document.getElementById("confirmPasswordError").style.display = "block";
		hasError = true;
	}

	if (hasError) {
		return;
	}

	addUserImg(jsonData.username);

	let request = new XMLHttpRequest();
	request.open("POST", "http://localhost:3000/user/register", true);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = function () {
		response = JSON.parse(request.responseText);
		if (response.message === "User registered") {
			alert(response.message);
			signInForm.style.display = "block";
			registerForm.style.display = "none";
			document.getElementById("signUsername").value =
				document.getElementById("username").value;
		} else {
			alert("Error. Unable to register user. " + response.message);
		}
	};
	request.send(JSON.stringify(jsonData));
}

async function login(event) {
	event.preventDefault();
	let response = "";
	let jsonData = {};

	jsonData.username = document.getElementById("signUsername").value;
	jsonData.password = document.getElementById("signPassword").value;

	if (jsonData.username == "" || jsonData.password == "") {
		document.getElementById("loginPasswordError").textContent =
			"All fields are required";
		document.getElementById("loginPasswordError").style.display = "block";
		return;
	}

	let request = new XMLHttpRequest();
	document.getElementById("loginPasswordError").style.display = "none";
	request.open("POST", "http://localhost:3000/user/login", true);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = async function () {
		response = JSON.parse(request.responseText);

		if (response.message == "User not found") {
			document.getElementById("loginUsernameError").textContent =
				response.message;
			document.getElementById("loginUsernameError").style.display = "block";
		} else {
			document.getElementById("loginUsernameError").style.display = "none";
		}

		if (response.message == "Invalid password") {
			document.getElementById("loginPasswordError").textContent =
				response.message;
			document.getElementById("loginPasswordError").style.display = "block";
		} else {
			document.getElementById("loginPasswordError").style.display = "none";
		}

		if (response.message == "Login successful") {
			sessionStorage.setItem("token", response.token);
			sessionStorage.setItem("username", response.username);
			sessionStorage.setItem("email", response.email);

			// Wait for getUserImge to complete before continuing
			await getUserImge(jsonData.username);
			setNavBar();
			closePopup();
			alert("Login successful!");
			location.reload();
		}
	};
	request.send(JSON.stringify(jsonData));
}

function updateUser() {
	document.getElementById("emailFormError").style.display = "none";
	document.getElementById("passwordFormError").style.display = "none";
	document.getElementById("confirmPasswordFormError").style.display = "none";

	let response = "";
	let jsonData = new Object();
	let email = document.getElementById("update-email").value;
	let password = document.getElementById("update-newPassword").value;
	let confirmPassword = document.getElementById("update-confirmPassword").value;
	let token = sessionStorage.getItem("token");

	if (email !== "") {
		if (!email.includes("@")) {
			document.getElementById("emailFormError").textContent =
				"Please input a vaild email";
			document.getElementById("emailFormError").style.display = "block";
			return;
		} else {
			jsonData.email = email;
		}
	}

	if (password !== "") {
		if (password.length < 6) {
			document.getElementById("passwordFormError").textContent =
				"Use 6 characters or more for your password";
			document.getElementById("passwordFormError").style.display = "block";
			return;
		}

		if (password == confirmPassword) {
			jsonData.password = password;
		} else {
			document.getElementById("confirmPasswordFormError").textContent =
				"Password do not match. Try again";
			document.getElementById("confirmPasswordFormError").style.display =
				"block";
			return;
		}
	}
	if (email == "" && password == "" && background == "" && pfp == "") {
		document.getElementById("confirmPasswordFormError").textContent =
			"Input field to update profile";
		document.getElementById("confirmPasswordFormError").style.display = "block";
		return;
	} else {
		document.getElementById("confirmPasswordFormError").style.display = "none";
		jsonData.token = token;
		if (background != "") {
			console.log("back");
			updateBackgroundImg(sessionStorage.getItem("username"));
		}
		if (pfp != "") {
			updateProfilePic(sessionStorage.getItem("username"));
		}
		if (email == "" && password == "") {
			return;
		}
	}
	console.log(jsonData);

	let request = new XMLHttpRequest();
	request.open("PUT", "http://localhost:3000/user/update", true);
	request.setRequestHeader("Content-Type", "application/json"); // Set the Content-Type header
	request.onload = function () {
		response = JSON.parse(request.responseText);
		if (response.message == "User updated") {
			alert("Profile updated successfully.");
			sessionStorage.setItem("email", jsonData.email);
			location.reload();
		} else {
			console.log(response);
			alert("Error. Unable to update profile.");
		}
	};
	request.send(JSON.stringify(jsonData));
}

function deleteUser() {
	let response = "";
	let jsonData = new Object();
	let token = sessionStorage.getItem("token");

	jsonData.token = token;

	let request = new XMLHttpRequest();
	request.open("DELETE", "http://localhost:3000/user/delete", true);
	request.onload = function () {
		response = JSON.parse(request.responseText);
		if (response.message == "User deleted") {
			deleteUserImg(sessionStorage.getItem("username"));
			deleteAllList();
			deleteAllReview();
			sessionStorage.removeItem("username");
			sessionStorage.removeItem("email");
			sessionStorage.removeItem("token");
			sessionStorage.removeItem("reviewPfp");
			setNavBar();
			logOut();
			alert("Account deleted successfully.");
		} else {
			alert("Error. Unable to delete profile.");
		}
	};
	request.send(JSON.stringify(jsonData));
}
