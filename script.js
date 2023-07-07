let chosenRating = document.getElementById("chosen-rating");

function whichRating(){

    if (document.getElementById("star-1").checked) {
        chosenRating.innerHTML = document.getElementById("label-1").value;
    }
    if (document.getElementById("star-2").checked) {
        chosenRating.innerHTML = document.getElementById("label-2").value;
    }
    if (document.getElementById("star-3").checked) {
        chosenRating.innerHTML = document.getElementById("label-3").value;
    }
    if (document.getElementById("star-4").checked) {
        chosenRating.innerHTML = document.getElementById("label-4").value;
    }
    if (document.getElementById("star-5").checked) {
        chosenRating.innerHTML = document.getElementById("label-5").value;
    }
    
}