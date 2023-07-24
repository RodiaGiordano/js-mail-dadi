// const listMail = ["@gmail.com", "@libero.it", "@virgilio.it", "hotmail.com" ];

// const button = document.getElementById("button");

// const typeMail = document.getElementById("type_mail");

// const userName = document.getElementById("user_name");

// const check = document.getElementById("check");


// button.addEventListener("click", function(){

//    const inputMail = typeMail.value;
//    let message ="Spiacente errore";



//    for (let i = 0; i < listMail.length; i++) {

//     if(inputMail == listMail[i]){

//     message = "accedi";

        
//     }

//    }

//    check.innerHTML = message;

// })


const buttonDice = document.getElementById("button_dice");

const whoWin = document.getElementById("who_win");

let message ="";


    buttonDice.addEventListener("click", function(){

    let userDice = Math.floor(Math.random() *6);
    let botDice = Math.floor(Math.random() *6);


   if(userDice < botDice){

    message = "Hai Perso";
    whoWin.innerHTML = message;

   }

   else if (userDice == botDice){

    message = "parità!";
    whoWin.innerHTML = message;
   }


   else{
    message = "Hai vinto";
    whoWin.innerHTML = message;
   }

})


