let random1 = function () {
    const random = Math.floor(Math.random() * 6) + 1;
    return random;
}
let random2 = function () {
    const random = Math.floor(Math.random() * 6) + 1;
    return random;
}
let messagebox = document.querySelector(".message-box");
//......winner......



let winner = function () {
    if (player1 > player2) {
        messagebox.innerText = "PLAYER 1 WON";
    }
    else if (player2 > player1) {
        messagebox.innerText = "PLAYER 2 WON";
    }
    else if (player1 == player2) {
        messagebox.innerText = "DRAW";

    }


};


let player1 = 0;
let player2 = 0;


let img = document.querySelector(".image1",);
//img.addEventListener("click", function () {
    player1 = random1();
    switch (player1) {

        case 1:
            img.setAttribute("src", "d" + player1 +".png");
            break;

        case 2:
            img.setAttribute("src", "d" + player1 + ".png");
            break;

        case 3:
            img.setAttribute("src", "d" + player1 + ".png");

            break;

        case 4:
            img.setAttribute("src", "d" + player1 + ".png");

            break;

        case 5:
            img.setAttribute("src", "d" + player1 + ".png");

            break;

        case 6:
            img.setAttribute("src", "d" + player1 + ".png");
            break;

    }



//});

let img2 = document.querySelector(".image2",);
//img2.addEventListener("click", function () {

    //if (player1 === 0) {
    //    return;
    //}
    player2 = random2();
    switch (player2) {

        case 1:
            img2.setAttribute("src", "d" + player2 + ".png");
            break;

        case 2:
            img2.setAttribute("src", "d" + player2 + ".png");
            break;

        case 3:
            img2.setAttribute("src", "d" + player2 + ".png");

            break;

        case 4:
            img2.setAttribute("src", "d" + player2 + ".png");

            break;

        case 5:
            img2.setAttribute("src", "d" + player2 + ".png");

            break;

        case 6:
            img2.setAttribute("src", "d" + player2 + ".png");
            break;

    }
    winner();
    setTimeout(() => {
        messagebox.innerText = "NEXT ROUND";
    }, 800);


//});

//.........winner ..
