const container = document.querySelector('.show-section');
document.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})

var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("image-container");
    if (n > x.length-1) { slideIndex = 0 }
    if (n < 0) { slideIndex = x.length-1 };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex].style.display = "flex";
}
