function validation() {
    let email = document.getElementById("js-formControlInput-email").value;
    let emailHelp = document.getElementById("emailHelp");
    let patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let btnEmail = document.getElementById("btnEmail");

 

    if (email.match(patternEmail)) {
        emailHelp.innerHTML = "Your email address is valid";
        emailHelp.style.color = "#41a739"
        
    }
    else {
        emailHelp.innerHTML = "Please enter valid email address";
        emailHelp.style.color = "#ff0000"
    }

}

function validationMobile() {
    let mobile = document.getElementById("js-formControlInput-mobile").value;
    let mobileHelp = document.getElementById("mobileHelp");
    let patternMobile = /^(\+381)?(\s|-)?6(([0-6]|[8-9])\d{6,7}|(77|78)\d{6,7}){1}$/;
    let btnMobile = document.getElementById("btnMobile")

    if (mobile.match(patternMobile)) {
        mobilelHelp.innerHTML = "Your mobile number is valid";
        mobilelHelp.style.color = "#41a739"
        // btnMobile.disabled = false;
    }
    else {
        mobileHelp.innerHTML = "Please enter mobile number in format +381 612345678";
        mobileHelp.style.color = "#ff0000"
    }
}

function check() {
    if (document.getElementById("checkTerms").checked == true) {
        btnMobile.disabled = false;
        btnEmail.disabled = false;
    }
}

function showDiv() {
    document.getElementById('myTab').style.display = "none";
    document.getElementById('email').style.display = "none";
    document.getElementById('mobile').style.display = "none";
    document.getElementById('loadingGif').style.display = "flex";
    document.getElementById('loadingGif').style.justifyContent = "center";
    document.getElementById('loadingGif').style.alignItems = "center";

    setTimeout(function() {
        document.getElementById('loadingGif').style.display = "none";
        document.getElementById('showme').style.display = "flex";
        document.getElementById('showme').style.justifyContent = "center";
        document.getElementById('showme').style.alignItems = "center";
    },2000);
     
}