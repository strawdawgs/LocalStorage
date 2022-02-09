function refreshData(){
    let fnameSpan = document.getElementById("fname-span");
    let lnameSpan = document.getElementById("lname-span");
    let emailSpan = document.getElementById("email-span");
    let phoneSpan  = document.getElementById("phone-span");

    let firstName = localStorage.getItem("firstName");
    let lastName = localStorage.getItem("lastName");
    let email = localStorage.getItem("email");
    let phone = localStorage.getItem("phone");

    fnameSpan.innerHTML = firstName;
    lnameSpan.innerHTML = lastName;
    emailSpan.innerHTML = email;
    phoneSpan.innerHTML = phone;
}