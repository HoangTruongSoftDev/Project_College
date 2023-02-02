

var arrayPicture = ["Coding.jpg", "Mont Royal.jpg", "League of Legends.webp"]
var arrayText = ["Coding", "Playing Games", "Traveling"];
var arrayColor = [0, 1];
var arrayHobby = [0, 1, 2];
var index = 0;
var timeout = null;

generateSlideShowHobby();
showSlide(index);
timeout = setTimeout(automaticChange, 5000);
floatLoop(0);
textLoop(0);

function textLoop(i) {

    if (arrayText.length > i) {
        setTimeout(function () {
            document.getElementById("sequenceText").innerHTML = arrayText[i];
            textLoop(++i);
        }, 2000);

    }
    else if (arrayText.length == i) {
        textLoop(0);
    }

}
function floatLoop(n) {
    if (n < arrayColor.length) {
        setTimeout(function () {
            var floatBox = document.getElementById("user-commentId");
            if (n == 0) {
                floatBox.setAttribute("style", "bottom: 200px");

            }
            else if (n == 1) {
                floatBox.setAttribute("style", "bottom: 150px");

            }
            floatLoop(++n);
        }, 1000)
    }
    else {
        floatLoop(0);
    }

}
function generateSlideShowHobby() {
    var slideSet = document.getElementsByClassName("hobby")[0];
    for (var i = 0; i < arrayHobby.length; ++i) {
        var slideDiv = document.createElement('div');
        slideDiv.className = "hobbyDiv hobby" + (i + 1);

        var slideTextDiv = document.createElement('div');
        slideTextDiv.className = "slideTextDiv";

        var slideTextParagraph = document.createElement('p');
        var slideTextHeading = document.createElement('h1');

        var slideImage = document.createElement('img');
        
        slideImage.src = arrayPicture[i];
        slideDiv.appendChild(slideImage);

        switch (i) {
            case 0: {
                slideTextHeading.innerHTML = "Coding - My Favourite Activities";
                slideTextParagraph.innerHTML = "I love to coding because it helps me to develop the ability to bounce back after failure.I learn that failure isn't necessarily a bad thing, and in fact, it can often be something positive because it serves as a learning opportunity. This is one of the most important reasons why I love coding, as I will learn quickly that \"debugging\" my code is half the fun.";
                break;
            }
            case 1: {
                slideTextHeading.innerHTML = "Traveling - The Best Way to Relieve Stressed";
                slideTextParagraph.innerHTML = "Traveling to new places is good for me such as Mont Royal Mountain, Atwater market, Biodome,... Whenever I'm feeling stressed at learning or work, travelling is always the best solution for me to relieve stress. Traveling can improve my mental health because it helps me feel calm.Taking time from work to see new places releases the stress I've been holding onto. Relieving the tension and stress of my work life lets my mind relax and heal.Being under pressure at work not only stresses my mind and body, but also hurts my physical health. THEREFORE, travelling is one of the most essential ways for me to relieve the Stress";

                break;
            }
            case 2: {
                slideTextHeading.innerHTML = "Playing Games - The Essentials in My Life";
                slideTextParagraph.innerHTML = "From 10 years ago until now, games are necessary in my life, not because I'm addicted, but when playing games, I'm like living in a new world, where I'm the God. The wonderful zone that I can be myself. One of my favourite games is League of Legends. Honestly, I've played this game for 8 years, and I'll play it until it's gone. I play it not only the gameplay is amazing, but also I have lots of memories with it. My Happiness, Sadness and Despression always include that game. It helps me to stand up after every difficulty.\n Moreover, I also like to play CS:GO and Valorant,too";

                break;
            }
        }
        slideTextDiv.appendChild(slideTextHeading);
        slideTextDiv.appendChild(slideTextParagraph);
        slideDiv.appendChild(slideTextDiv);
        slideSet.appendChild(slideDiv);
    }
}

function showSlide(n) {
    var displayHobby = document.getElementsByClassName("hobbyDiv");
    for (var i = 0; i < arrayHobby.length; ++i) {
        displayHobby[i].style.display = "none";
    }
    if (n > arrayHobby.length - 1) { index = 0; }
    if (n < 0) { index = arrayHobby.length - 1; }
    displayHobby[index].style.display = "block";

}
function switchSlide(n) {
    index += n;

    showSlide(index);
    if (timeout != null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 6000);
    }
}
function automaticChange() {
    ++index;
    showSlide(index);
    setTimeout(automaticChange, 6000);
}