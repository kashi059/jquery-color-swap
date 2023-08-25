$(document).ready(readyNow);
//setup 

//Number of clicks stored here


function readyNow(){
$ ('#generatingButton').on('click', makeDiv);

$('#insertionPoint').on('click','.remove', removeButton);

$ ('#insertionPoint').on('click', '.yellowButton', makeYellow);

}


let numberOfClicks = 0;


function makeDiv(event){
    event.preventDefault();
    //add to the clicks number
    numberOfClicks ++;
    console.log(numberOfClicks);
    console.log('makeDiv is running');
    let addAnElement = `
        <div class = "divHere">
            <p class = "clicksCalculated">${numberOfClicks}</p>
            <button class = "yellowButton">Yellow</button>
            <button class = "remove">Delete</button>
        </div>

`

$('#insertionPoint').append(addAnElement);


            // <tr id="insertionPoint">
            //     <td class="firstNameStyle">${firstNameInput}</td>
            //     <td class="lastNameInputStyle">${lastNameInput}</td>
            //     <td class="idInputStyle">${idInput}</td>
            //     <td class="titleInputStyle">${titleInput}</td>
            //     <td class="annualSalaryInputStyle">$${annualSalaryInput}</td>
            //     <td>
            //         <button class = "remove">
            //         X
            //     </button>
}          //     </td>
            // </tr>;
function makeYellow(){
    $('.yellowButton').removeClass('divHere');
    Element.classList.add('divHereYellow');
    
}


// '.divHere'.css({
//     "background-color": "yellow",
//     "color": "white"
//   });



// if (makeYellow) {
//     '.divHere'.css({
//       "background-color": "yellow",
//       "color": "white"
//     });
//   } else {
//     '.divHere'.css({
//       "background-color": "red",
//       "color": "black"
//     });
//   }








//this is where the remove button function lives
function removeButton(){
    $(this).parent(".divHere").remove();

    console.log("this is running");
    // console.log('SMOKE');
    // $(this).parentsUntil("tbody").remove();
}


//TO DO 
//  ✅

//  ✅ on click (generatingButton) append a new div
// ✅  in that div create a p element that shows how many times you have
// clicked the generate button from the first step
//

// ✅inside the same div element append two button elements with the text"Yellow" & "Delete"

// css, (on the div element) red background on number until changed

// css, (on the same div element) make yellow on yellow button pushed

// ✅clicking the delete button should remove the whole div element





// If you get this far your done!