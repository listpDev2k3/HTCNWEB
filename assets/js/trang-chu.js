function onScrollHeader() {
    const header = document.getElementsByClassName("header")[0];
    const scrollProgress = window.scrollY;
    if (scrollProgress > 0) {
        header.style.top = "-122px";
    } else {
        header.style.top = "0";
    }
}
window.addEventListener("scroll", onScrollHeader);

