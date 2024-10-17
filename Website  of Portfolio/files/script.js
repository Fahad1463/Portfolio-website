function myfunction() {
    let inp = document.getElementById("search").value;
    if (inp === "") {
        let appear = document.getElementById("forerror").innerHTML = "*Enter your email";
    }
    else {
        alert("Email: " + inp + "\n" + "Your email recieved successfully");
    }
}