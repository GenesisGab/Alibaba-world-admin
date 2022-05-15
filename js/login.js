//IMPORTAR BASE DE DATOS DE USUARIO (user.js)
import { usr } from "./user.js";
import { userCreditCard } from "./user_has_creditcard.js";

export function revisarusuarios(usuario,password){
    console.log(usuario,password);

    let userid=0;

    for (let i=0;i<usr.length;i++){

        if(usuario==usr[i][1]){
            console.log("Usuario Valido");

            if(password==usr[i][2]){
                console.log("User_id:   ",usr[i][0]);

                userid=usr[i][0];

                console.log("Username:  ",usr[i][1]);
                console.log("Password:  ",usr[i][2]);
                console.log("Full name: ",usr[i][3]);
                console.log("Address:   ",usr[i][4]);
                console.log("Email:     ",usr[i][5]);
                console.log("Phone:     ",usr[i][6]);
               //console.log("Tarjeta de credito: ",userCreditCard[i][1]);


                //Buscar el numero de tarjeta de credito del usuario
                for (let j=0;j<userCreditCard.length;j++){
                    if(userid==userCreditCard[j][0]){
                        console.log(userCreditCard[j][1]);
                    }
                }

                i=usr.length;

            }else{
                console.log("Contraseña no valida");
            }

        }else if(usuario==usr[i][5]){

            console.log("Acceso con email");

            console.log("Username:  ",usr[i][1]);
            console.log("Password:  ",usr[i][2]);
            console.log("Full name: ",usr[i][3]);
            console.log("Address:   ",usr[i][4]);
            console.log("Email:     ",usr[i][5]);
            console.log("Phone:     ",usr[i][6]);
            console.log("Tarjeta de credito: ",userCreditCard[i][1]);

            i=usr.length;

        }else{
            console.log("Acceso denegado");
        }

    }


}

