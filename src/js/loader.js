window.hideOverlay = () => {
    document.getElementById('overlay').classList.add("hide-overlay");
};
window.addEventListener('load', function () {
    document.getElementById('overlay').style.display = 'block';
    setTimeout("window.hideOverlay()", 1250);    
})