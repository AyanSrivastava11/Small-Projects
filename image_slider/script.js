let flag = 0;

// x -> left =-1 and right =+1
function controller(x){
    flag = flag + x;

    // console.log(flag);
    slideShow(flag);
    
}

// function controller(x) {
//     flag = flag + x;

//     // Ensure flag stays within valid range
//     if (flag < 0) {
//         flag = 0; // Set flag to the first slide index
//     } else if (flag >= slides.length) {
//         flag = slides.length - 1; // Set flag to the last slide index
//     }

//     console.log(flag);
//     slideShow(flag);
// }

slideShow(flag);

function slideShow(num){
    let slides = document.getElementsByClassName("slide");
    // created array of 4 div
    // console.log(slides);

    if(num == slides.length){
        flag = 0;
        num =0;
    }
    else if(num < 0 ){
        flag = slides.length - 1;
        num = slides.length -1;
    }

    for(let y of slides){
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}

console.log(num);
slideShow(flag)