document.getElementById("games_button").setAttribute("id", "games_btn");
let a = document.getElementsByClassName("landscape-element block-link cf titlefix js-featured-show-link")
for (let i = 0; i < a.length; i++) {
    a[i].setAttribute("class", "landscape-element-modified block-link cf titlefix js-featured-show-link")
    }
let b = document.getElementsByClassName("landscape-element block-link cf titlefix")
while (b.length){
    for (let j = 0; j < b.length; j++) {
        b[j].setAttribute("class", "landscape-element-modified block-link cf titlefix")
    } 
}