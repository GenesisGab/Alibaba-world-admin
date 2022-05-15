/**********************
 * INICIO DE SESIÓN
 *********************/

import { revisarusuarios } from "./login.js";


let usuario = prompt("Ingrese usuario o email: ",0);
let password = prompt("Ingrese su contraseña: ",0);

revisarusuarios(usuario,password);