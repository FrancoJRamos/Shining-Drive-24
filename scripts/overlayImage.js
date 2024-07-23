/*  Shining Drive-24 Scripts

    overlayImage.js
    Summary:
        click on an img element with the overlay_image class
        read its src & alt text values and store them in the Image_Placholder id img element
        
        turn on the placeholder element, turn on the overlay

        click outside the grown image to turn the overlay off
*/

//see if you can change the z-index of a single element in the class array

let overlayImages;
InitializeOverlayImages();
const placeholderImage = document.getElementById("Image_Placeholder");

// console.log(overlayImages);

//click on one element and get the overlay working
for(i=0;i<overlayImages.length;i++)
{
    overlayImages[i].addEventListener("click",function()
    {
        //checking for the element
        // console.log("you have pressed the "+i+"th element");
        // console.log(this.alt);

        //send to placeholder
        placeholderImage.src = this.src;
        placeholderImage.alt = this.alt;

        //toggle overlay & placeholder
        overlay.style.display = "block";
        placeholderImage.style.display = "block";

    })
}

//click outside of the image to reset page
overlay.addEventListener("click",function()
{
    console.log("hey that tickles! ^-^");
    overlay.style.display = "none";
    placeholderImage.style.display = "none";
    
    //close the nav menu if its open
    if(isNavOpen)ToggleNav();
})

function InitializeOverlayImages()
{
    overlayImages = document.getElementsByClassName("overlay_image");
    console.log(overlayImages.length+" items were found");
}