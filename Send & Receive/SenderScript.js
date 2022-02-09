function sendData(){
    localStorage.clear();
    let fname = document.getElementById("fname");
    if(fname && fname.value){
        localStorage.setItem("firstName", fname.value);
    }else
        localStorage.setItem("firstName", "Not Entered");
    
    let lname = document.getElementById("lname");
    if(lname && lname.value){
        localStorage.setItem("lastName", lname.value);
    }else
        localStorage.setItem("lastName", "Not Entered");

    let email = document.getElementById("email");
    if(email && email.value){
        localStorage.setItem("email", email.value);
    }else
        localStorage.setItem("email", "Not Entered");

    let phone = document.getElementById("phone");
    if(phone && phone.value){
        localStorage.setItem("phone", phone.value);
    }else
        localStorage.setItem("phone", "Not Entered");

    console.log(localStorage);
}