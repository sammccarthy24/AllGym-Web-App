var myApp = angular.module('myApp',[])

myApp.controller('MyController', function($scope) {
  
  
  
	// Function to insert a line break
	$scope.lineBreak = function () {
		linebreak = document.createElement("br");
		document.getElementById("page").appendChild(linebreak);
	}
	
	// Function to load member log in page
	$scope.memberLogIn = function () {
		
		document.body.removeChild(page)
		
		// Generate page div
		var div = document.createElement("div");
		div.setAttribute("id","page")
		document.body.appendChild(div);
		
		// Generate member email input box
		var inputMemberEmail=document.createElement("input");
		inputMemberEmail.setAttribute("placeholder","Email");
		document.getElementById("page").appendChild(inputMemberEmail);
		$scope.lineBreak()
		
		// Generate member password input box
		var inputMemberPassword=document.createElement("input");
		inputMemberPassword.setAttribute("placeholder","Password");
		document.getElementById("page").appendChild(inputMemberPassword);
		$scope.lineBreak()
		
		// Generate member log in button
		var btnLogInMember = document.createElement("BUTTON");
		var btnLogInMemberText = document.createTextNode("LOG IN");
		btnLogInMember.appendChild(btnLogInMemberText);
		document.getElementById("page").appendChild(btnLogInMember);
		btnLogInMember.addEventListener('click', $scope.menuGyms)
		$scope.lineBreak()
		
		
	}
	
	// Function to load gym log in page
	$scope.gymLogIn = function () {
		
		document.body.removeChild(page)
		
		//Generate page div
		var div = document.createElement("div");
		div.setAttribute("id","page")
		document.body.appendChild(div);
		
		// Generate gym email input box
		var inputGymEmail=document.createElement("input");
		inputGymEmail.setAttribute("placeholder","Email");
		document.getElementById("page").appendChild(inputGymEmail);
		$scope.lineBreak()
		
		// Generate gym password input box
		var inputGymPassword=document.createElement("input");
		inputGymPassword.setAttribute("placeholder","Password");
		document.getElementById("page").appendChild(inputGymPassword);
		$scope.lineBreak()
		
		// Generate gym log in button
		var btnLogInGym = document.createElement("BUTTON");
		var btnLogInGymText = document.createTextNode("LOG IN");
		btnLogInGym.appendChild(btnLogInGymText);
		document.getElementById("page").appendChild(btnLogInGym);
		btnLogInGym.addEventListener('click', $scope.classManager)
		$scope.lineBreak()
		
		
	}
	
	$scope.menuGyms = function () {
		
	}
	
	$scope.classManager = function () {
		
	}
	
	// Generate Logo
	var logo=document.createElement("img");
	logo.setAttribute('src', 'logo100px.jpg');
	document.getElementById("page").appendChild(logo);
	$scope.lineBreak()
	
	// Generate member log in button
	var btnMemberLogIn = document.createElement("BUTTON");
    var btnMemberLogInText = document.createTextNode("MEMBER LOG IN");
    btnMemberLogIn.appendChild(btnMemberLogInText);
    document.getElementById("page").appendChild(btnMemberLogIn);
	btnMemberLogIn.addEventListener('click', $scope.memberLogIn)
	$scope.lineBreak()
	
	// Generate gym log in button
	var btnGymLogIn = document.createElement("BUTTON");
    var btnGymLogInText = document.createTextNode("GYM LOG IN");
    btnGymLogIn.appendChild(btnGymLogInText);
    document.getElementById("page").appendChild(btnGymLogIn);
	btnGymLogIn.addEventListener('click', $scope.gymLogIn)
	$scope.lineBreak()
	
	// Generate register link
	var linkRegister = document.createElement('a');
	var linkRegisterText = document.createTextNode("REGISTER");
	linkRegister.appendChild(linkRegisterText);
	linkRegister.href = "http://www.google.com";
	document.getElementById("page").appendChild(linkRegister);
	$scope.memberLogIn = function () {
		
	}
	
	
	
})