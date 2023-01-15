var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "w":
            var w1 = new Audio('1.mp3');
            w1.play();
            break;

        case "a":
            var a2 = new Audio('2.mp3');
            a2.play();
            break;

        case "s":
            var s3 = new Audio('3.mp3');
            s3.play();
            break;

        case "d":
            var d4 = new Audio("4.mp3");
            d4.play();
            break;

        case "j":
            var a7 = new Audio('7.mp3');
            a7.play();
            break;

        case "k":
            var a5 = new Audio('5.mp3');
            a5.play();
            break;

        case "l":
            var a6 = new Audio('6.mp3');
            a6.play();
            break;


        default:
            console.log(key);

    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}