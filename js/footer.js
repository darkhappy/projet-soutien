function showDonate() {
    document.getElementById("donateBox").style.display = "block";
}
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById("donateBox")) {
        document.getElementById("donateBox").style.display = "none";
    }
});