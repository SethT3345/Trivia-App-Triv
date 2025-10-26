function handleLogin(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matcheduser = users.find(user => user.username === username && user.password === password);
    
    if(matcheduser){
        alert("Login Successful");
        window.location.href = "home.html";
        
    } else {
        alert("Invalid username or password!");
        throw new Error("Invalid username or password");
    }
}

function gohp(){
    window.location.href = "index.html";
}