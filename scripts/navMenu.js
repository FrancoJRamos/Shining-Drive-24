/*  Shining Drive-24 Scripts

    NavMenu.js
    Summary:
        click a nav button
        toggle visibility for nav menu
        turn on overlay div
*/

//  get elements from html
const navList = document.getElementById("nav_list");
const overlay = document.getElementById("Overlay");
const navButton = document.getElementById("nav_button");
const navMenu = document.getElementById("nav_menu");
//logic
let isNavOpen = false;

// console.log(overlay.style);

//  function to toggle overlay & nav Elements
//      turn on navList Element
//      turn on overlay div
//          edit zIndex values
function ToggleNav()
{
    if(!isNavOpen)
    {
        isNavOpen = true;
        navList.style.display = "block";
        navMenu.style.zIndex = "6";
        overlay.style.display="block";
    }
    else if(isNavOpen)
    {
        isNavOpen = false;
        navList.style.display = "none";
        navMenu.style.zIndex = "2";
        overlay.style.display="none";
    }
}
//  click button to activate event
navButton.addEventListener("click",ToggleNav);