'use strict';
var link = document.querySelector(".button");
var popup = document.querySelector(".form-search");
var form = popup.querySelector("form");
                    
link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.toggle("form-search-show");
});