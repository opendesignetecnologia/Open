
var full = document.getElementById("full");


if(window.matchMedia("(max-width: 700px)").matches){
    full.style.cssText="background-image: url(assets/img/full-mobile.png);"
}else{
    full.style.cssText="background-image: url(assets/img/full-desktop.png);"

}

console.log(full)