/*  Shining Drive-24 Scripts

    projectArrays
    Summary:
        Be able to click a button on the project page and change the project currently shown
    Behaviors:
        click a button within the project select section
            when clicked take the value of the radio button,
                use it as an index & fill in the html for the hero image, and its project description
        click a button within the tag select
            when activated:
                show that the button is activated
                hide any projects that don't share the same string as the button
            to deactivate:
                click an active button
                click another button
            when deactivated:
                reset the display to show all projects
    
*/
//store the HTML objects to edit: the hero image, and its project description
let heroImage = document.getElementById("hero_image");
let projectDescription = document.getElementById("project_info_list");
let projectTitle = document.getElementById("project_title");

// console.log(heroImage);
// console.log(heroImage.src);
// console.log(heroImage.alt);

//click a button within project select & get its value
//store radio buttons, the values for these buttons can be used as the index for updating the page with the correct information
var projectRadioInputs = document.querySelectorAll("input[name=project_select_form]")

//store the labels for the radio buttons, this is what shows inside the HTML and lets you hide and show them

//change event for radio inputs, to check if a radio button was clicked
for(let i=0;i<projectRadioInputs.length;i++)
{
    projectRadioInputs[i].addEventListener("change",function()
    {
        let localIndex = projectRadioInputs[i].value
        
        //change src & alt of the hero image
            if(projectImageList[localIndex])
            {
                heroImage.src = "images/projects/"+projectImageList[localIndex];
                heroImage.alt=projcetAltList[localIndex];
            }
            else
            {
                console.log("element not declared");
            }
        //change the html of the project description
            //change the title
            //change the year
            //tags
            //tools
            //description
        //go to the hero section of the page with id="project_hero_images"
            //for mobile, target the site_map id to get a good view of the hero image
        window.location.href = "#site_map";
    })

}

