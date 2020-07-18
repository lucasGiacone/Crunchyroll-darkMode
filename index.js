document.getElementById("games_button").setAttribute("id", "games_btn");
let a = document.getElementsByClassName("landscape-element block-link cf titlefix js-featured-show-link")
for (let i = 0; i < a.length; i++) {
    a[i].setAttribute("class", "landscape-element-modified block-link cf titlefix js-featured-show-link")
    }