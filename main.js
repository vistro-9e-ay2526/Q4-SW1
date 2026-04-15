//Login details
const correctUser = "Cloudy_Scarf";
const correctPass = "165739";

//Login button
document.getElementById("login").addEventListener("click", function() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === correctUser && pass === correctPass) {
        alert("Access granted!\nWelcome"+ user+"!");
    }
    else {
        alert("Access denied!\nIncorrect username and/or password.");
    }
});