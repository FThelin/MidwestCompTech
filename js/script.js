window.addEventListener("scroll", function() {
    const header = document.querySelector('header');
    if(window.scrollY == 0){
        header.style.backgroundColor = "rgba(0,0,0,0.1)";
    } else {
        header.style.backgroundColor = "black";
    }  
})