const listMail = ["@gmail.com", "@libero.it", "@virgilio.it", "hotmail.com" ];

const button = document.getElementById("button");

const typeMail = document.getElementById("type_mail");

const userName = document.getElementById("user_name");

const check = document.getElementById("check");


button.addEventListener("click", function(){

   const inputMail = typeMail.value;
   let message ="Spiacente errore";



   for (let i = 0; i < listMail.length; i++) {

    if(inputMail == listMail[i]){

        message = "accedi";

        
    }

   }

   check.innerHTML = message;

})