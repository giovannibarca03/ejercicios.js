//Ejercicio 1 (básico) · El aviso de batería
const batteryLevel = 100;
const isCharging = true;

function theBatteryIsCharging (batteryLevel, isCharging) {
if (isCharging) {
    console.log(`Cargando (${batteryLevel}%)`);
} else if (!isCharging && batteryLevel <=5) {
    console.log ('Bateria critica: el movil se apagara pronto');
} else if (!isCharging && batteryLevel <=20) {
    console.log ('Bateria baja');
} else {
    console.log ('Bateria correcta');
}
}

theBatteryIsCharging (5, true)

//Ejercicio 2 (medio) · ¿Puede entrar al cine?
const age = 10;
const withAdult = false;
const rating = 'TP';

function canWatchtheMovie (age, withAdult, rating) {
if (rating === 'TP') {
  console.log('Puede entrar');
} else if (rating === '+12') {
  if (age >= 12 || (age >= 7 && withAdult)) {
    console.log('Puede entrar');
  } else {
    console.log('No puede entrar');
  }
} else if (rating === '+16') {
  if (age >= 16) {
    console.log('Puede entrar');
  } else {
    console.log('No puede entrar');
  }
} else if (rating === '+18') {
    if (age >= 18) {
        console.log ('Puede entrar');
    } else {
        console.log ('No puede entrar');
    }
} else if (rating !== 'TP' && rating !== '+12' && rating !== '+16' && rating !== '+18') {
    console.log ('Clasificación desconocida')
}
}
canWatchtheMovie (10, false, 'TP')


//Ejercicio 1 (básico) · Saludos
function getFullName(name, lastName) {
  return `${name} ${lastName}`;
}

getFullName('Godofredo', 'Pérez')


function greet(name, language) {
  if (language === 'en') {
    return `Hello, ${name}`;
  } else if (language === 'fr') {
    return `Bonjour, ${name}`;
  } else if (language === 'es') {
    return `Hola, ${name}`;
  } else {
    return `Hola, ${name}`;
  }
}

console.log(greet('Rodofasio', 'de'))

//Ejercicio 2 (medio) · Pagar a medias
function calculateTip(bill, percent = 10)
Math.round(numero * 100) / 100