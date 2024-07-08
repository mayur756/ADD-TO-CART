function logindata(){

    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value;
    let conform=document.getElementById("co_pass").value;

    let email_inp=window.localStorage.getItem("email_inp");
    let pass_inp=window.localStorage.getItem("pass_inp");
    let conf1=window.localStorage.getItem("conf1");

    if(email==email_inp && password==pass_inp && conform==conf1){
        window.location.href="home.html";
    }
    else{
        alert("plese enter the vaild input..");
    }
}