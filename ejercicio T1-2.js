// Ejercicio 1 (básico) · ¿Qué saldrá por consola?
console.log(1 + '1'); //11
console.log(typeof '42'); //string
console.log(2 + 3 * 4); //14
console.log(17 % 5); //2   % è il resto della divisione: 17 = 5 * 3 + 2.
console.log('Godofredo'.length); //9
console.log(10 === '10'); //false Number e string sono tipi diversi.
console.log('Ornitorrinco'.toUpperCase().includes('RINCO')); //true
console.log(typeof (5 > 3)); //boolean
console.log(`${2 + 2} manzanas`); //4 manzanas 
console.log(!(3 >= 3) || 'a' !== 'b'); //true

//Ejercicio 2 (medio) · La ficha del libro
const title = 'La venganza de Xindasvinto';
const author = 'Ruperto Gil';
const pages = 320;
const isRead = true;

const bookCard = `"${title}" de ${author} · ${pages} páginas · Leído: ${isRead}`;
const isLongBook = pages > 300
const hasRevengeInTitle = title.toLowerCase().includes('venganza');
const titleLength = title.length

console.log(bookCard, isLongBook, hasRevengeInTitle, titleLength);

//Ejercicio 3 (reto) · ¿Nombre de usuario válido?
username.length >= 3 && username.length <= 15 //tra 3 e 15 caratteri, estremi inclusi.
!username.startsWith('_') //non inizia con _. Il metodo startsWith() //restituisce true se la stringa inizia con quel carattere. A noi serve il contrario, quindi neghiamo con !:
!username.includes(' ') //nessuno spazio. includes(' ') restituisce true se c’è almeno uno spazio. 

const username = 'giovanni_99';

const isValidUsername =
  username.length >= 3 &&
  username.length <= 15 &&
  !username.startsWith('_') &&
  !username.includes(' ');

console.log(isValidUsername); // true

function isValidUsername(username) {
    const isValid = username.length >= 3 && username.length <= 15 && !username.startsWith("_");
    console.log(isValid);
}

isValidUsername("giovanni99");

function isValidUsername(username) {
    return username.length >= 3 && username.length <= 15 && !username.startsWith("_");
}

console.log ((isValidUsername)("godo"))

----------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 1 (básico) · Los caramelos de la tía Rutofisia
const candies = 47
const nephews = 6

const leftover = candies % nephews; // 47 % 6 = 5
const perNephew = (candies - leftover) / nephews; // (47 - 5) / 6 = 42 / 6 = 7
console.log(perNephew); // 7
console.log(leftover);  // 5

//Ejercicio 2 (básico) · ¿Hay pádel o no hay pádel?
const hasCourt = true
const players = 4
const isRaining = false

const canPlay = hasCourt && players === 4 && !isRaining;
const needsMorePlayers = players < 4;

console.log(canPlay);          // true
console.log(needsMorePlayers); // false


const hasCourt = true;
const players = 4;
const isRaining = false;

function canPlay(hasCourt, players, isRaining) {
    return hasCourt && players === 4 && !isRaining;
}

console.log(canPlay(hasCourt, players, isRaining));


//Ejercicio 3 (medio) · Encuentra los bugs
// 1. La media de los dos exámenes de Godofredo
const firstExam = 7;
const secondExam = 9;
const average = (firstExam + secondExam) / 2; //mancavano le parentesi
console.log(average); // Esperado: 8

// 2. ¿Es administrador?
const role = 'admin';
const isAdmin = role.toLowerCase() === 'admin';
console.log(isAdmin); // Esperado: true, aunque el rol venga en minúsculas o mayúsculas

// 3. ¿Es mayor de edad?
const age = 18;
const isAdult = age === 18 || age > 18;
console.log(isAdult); // Esperado: true

//Ejercicio 4 (medio) · Refactoriza el código de Rodofasio
const userName = 'Rodofasio';
const unreadMessages = 3;
const isOnline = true;
const isBlocked = false;
const country = 'Francia';

const welcome = `"Hola, ${userName}. Tienes ${unreadMessages} mensajes sin leer."`

const canChat = isOnline && !isBlocked

const isForeign = country !=='España';

console.log(welcome);
console.log(canChat, isForeign);

//Ejercicio 5 (reto) · El reloj del microondas
const totalSecond 135







