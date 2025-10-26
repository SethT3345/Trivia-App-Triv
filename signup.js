function handleSignup(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.find(user => user.username === username);
    if(userExists){
        alert("User Already Exists")
        throw new Error("That User Already Exists");        
    }
    if(!username.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
            alert("Enter A Valid Email")
            throw new Error("Doesnt Match An Email!");
        }
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/)){
        alert("Enter A Stronger Password")
        throw new Error("Not strong enough password!");
    }



    const newUser = { username: username, password: password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    
    alert("Account created successfully!");

    window.location.href = "login.html";
}

function gohp(){
    window.location.href = "index.html";
}