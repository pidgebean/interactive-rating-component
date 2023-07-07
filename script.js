let chosenRating = document.getElementById("chosen-rating");

function whichRating(){
    document.getElementById("form-2").setAttribute('style', 'display:block');
    document.getElementById("form-1").setAttribute('style', 'display:none');

    if (document.getElementById("star-1").checked) {
        chosenRating.innerHTML = document.getElementById("label-1").innerHTML;
    }
    if (document.getElementById("star-2").checked) {
        chosenRating.innerHTML = document.getElementById("label-2").innerHTML;
    }
    if (document.getElementById("star-3").checked) {
        chosenRating.innerHTML = document.getElementById("label-3").innerHTML;
    }
    if (document.getElementById("star-4").checked) {
        chosenRating.innerHTML = document.getElementById("label-4").innerHTML;
    }
    if (document.getElementById("star-5").checked) {
        chosenRating.innerHTML = document.getElementById("label-5").innerHTML;
    }
    
}