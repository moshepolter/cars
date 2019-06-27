count = 0
function si(){
	count += 1
	username2 = "moshepolter"
	password2 = "Moshe123"
	const username = prompt("Please Enter Your Username")
	const password = prompt("Please Enter Your Password")
	if (count == 2){
		document.getElementById("si").innerHTML = "Sign in"
		document.getElementById("suu").innerHTML = "Sign up"
	}
	else if (username == username2 && password == password2){
		alert("You are signed in")
		document.getElementById("si").innerHTML = "Sign out"
		document.getElementById("suu").innerHTML = "FAQ"
	}
	else if (username != username2 || password != password2){
		alert("Wrong username or password")
	}
}
function su(){
	const username1 = prompt("Please Enter a Username")
	const password1 = prompt("Please Enter a Password")
	const email = prompt("Please Enter a Email address")
}