function signup(){

        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let conform=document.getElementById("conf-password").value;
        
        window.localStorage.setItem("email_inp",email);

        if(password == conform){
                window.localStorage.setItem("pass_inp",password);
                window.localStorage.setItem("conf1",conform);
                window.location.href="home.html";
        }
        else{
                alert("please enter vaild password..");
        }
}