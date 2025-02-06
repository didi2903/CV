document.getElementById("button").addEventListener("click", changeLanguge);

function changeLanguge() {
    document.getElementById("1").textContent = "Home"
    document.querySelector(".eng").textContent = 'engleski';
    document.getElementById("button").addEventListener("click", changeLanguge2);
}

function changeLanguge2() {
    document.getElementById("text").classList.toggle("cro");
    document.querySelector(".cro").textContent = 'hrvatski';
    document.getElementById("button").addEventListener("click", changeLanguge);
}
