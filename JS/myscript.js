




const username = prompt ("Inserisci il tuo nome") ;

const familyName = prompt ("Inserisci il tuo cognome");

const prefColor = prompt ("inserisci il tuo colore preferito") ;


document.getElementById("userName").innerHTML = ("Il tuo user è: " + username);

document.getElementById("userFamilyName").innerHTML = ("Il tuo cognome è: " + familyName);

document.getElementById("preferredColor").innerHTML =("Colore preferito: " + prefColor);

let raNumb = Math.floor((Math.random() * 100) + 1);

const pwdGenerated = username + familyName + prefColor + raNumb

document.getElementById("pwdComplete").innerHTML = pwdGenerated;
