'use strict';
var name = prompt ("what's your name?");
console.log (name)
alert (`hello & welcome to the website ${name} wish you a joy visit`);

var know = prompt ("do you know me personally?") .toLowerCase();
console.log (know);
if (know === 'yes' || know === 'y'){
    // console.log (know);
    alert ('your answer is right');
} else if (know === 'no' || know === 'n') {
    // console.log (know);
    alert ('your answer is right');
} else {
    alert ('try again with yes or no');

}

var know2 = prompt ("do you think i love sport?") .toLowerCase();
console.log (know2);
if (know2 === 'yes' || know2 === 'y'){
    // console.log (know2);
    alert ('bingo, im addicted to sport');
} else if (know2 === 'no' || know2 === 'n') {
    // console.log (know2);
    alert ('Oops!, im addicted to sport');
} else {
    alert ('try again with yes or no');
}

    var know3 = prompt ("I love my speciality?") .toLowerCase();
    console.log(know3);
    if (know3 === 'yes' || know3 === 'y'){
        // console.log (know3);
        alert ('your answer is right');
    } else if (know3 === 'no' || know3 === 'n') {
        // console.log (know3);
        alert ('wrong, i do love my speciality');
    } else {
        alert ('try again with yes or no');
    }

        var know4 = prompt ("am i a tea person?") .toLowerCase();
        console.log(know4);
        if (know4 === 'yes' || know4 === 'y'){
            // console.log (know4);
            alert ('no im a coffee person');
        } else if (know4 === 'no' || know4 === 'n') {
            // console.log (know4);
            alert ('your answer is right');
        } else {
            alert ('try again with yes or no');
        }

            var know5 = prompt ("i like daisy?") .toLowerCase();
            console.log(know5);
            if (know5 === 'yes' || know5 === 'y'){
                // console.log (know5);
                alert ('your answer is right');
            } else if (know5 === 'no' || know5 === 'n') {
                // console.log (know5);
                alert ('you are wrong, im in love with daisy');
            } else {
                alert ('try again with yes or no');
            }

            alert (`thank you for your time, 
            i hope that you had a good time ${name}`);
