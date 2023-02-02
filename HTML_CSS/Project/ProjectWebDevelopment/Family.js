


var arrayFatherImage = ["father-portray.jpg", "father-vacation.jpg", "father-bolero.png"];
var arrayFatherCaption = ["My Father's Portray", "Ha Long Bay Vacation", "His Favourite Type of Song"];

var arrayMotherImage = ["mother-portray.jpg", "mother-restaurant.jpg", "mother-coffee.jpg"]
var arrayMotherCaption = ["My Mother's Portray", "My Mother's Restaurant", "Her Hobby in Every Morning"];



generateImage();
var index = 0;
showSlide(index);

var timeout = null;
timeout = setTimeout(autoChange, 4000);

function generateImage() {
    var slideSetUpFather = document.getElementsByClassName("father-imageDiv")[0];
    var slideSetUpMother = document.getElementsByClassName("mother-imageDiv")[0];
    for (var i = 0; i < arrayFatherImage.length; ++i) {
        /*Father set up slide*/
        var currentSlideFather = document.createElement('div');
        currentSlideFather.className = "fatherSlide FatherNumber" + (i + 1);

        var currentImageFather = document.createElement('img');
        currentImageFather.src = arrayFatherImage[i];
        currentSlideFather.appendChild(currentImageFather);

        var currentCaptionFather = document.createElement('div');
        currentCaptionFather.className = "fatherCaption FatherNumberCaption" + (i + 1);
        currentCaptionFather.innerHTML = arrayFatherCaption[i];
        currentSlideFather.appendChild(currentCaptionFather);

        slideSetUpFather.appendChild(currentSlideFather);

        /*Mother set up slide*/
        var currentSlideMother = document.createElement('div');
        currentSlideMother.className = "motherSlide MotherNumber" + (i + 1);

        var currentImageMother = document.createElement('img');
        currentImageMother.src = arrayMotherImage[i];
        currentSlideMother.appendChild(currentImageMother);

        var currentCaptionMother = document.createElement('div');
        currentCaptionMother.className = "motherCaption MotherNumberCaption" + (i + 1);
        currentCaptionMother.innerHTML = arrayMotherCaption[i];
        currentSlideMother.appendChild(currentCaptionMother);

        slideSetUpMother.appendChild(currentSlideMother);

        
    }
}

function showSlide(n) {
    
    var fatherSlides = document.getElementsByClassName("fatherSlide");
    var motherSlides = document.getElementsByClassName("motherSlide");
    
    if (n > 2) { index = 0; }
    
    for (var i = 0; i < fatherSlides.length; ++i) {
        fatherSlides[i].style.display = "none";
        motherSlides[i].style.display = "none";
        
        
    }
    fatherSlides[index].style.display = "block";
    motherSlides[index].style.display = "block";
    
}
function autoChange() {
    ++index;
    showSlide(index);
    timeout = setTimeout(autoChange, 4000);
}




