/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;
let rett = 0;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
  do{
    play();
  }
  while(confirm("Spila annan leik?"));
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplýsingar um niðurstöður.
 *
 */
function play() {
  let spila = true;

   const seconds_start = new Date().getTime();

   for(let i = 0; i<GAMES_TO_PLAY; i++){
    let p = ask();
    if(p === null){
      return null;
      break;
    }
  }

 const seconds_end = new Date().getTime(); //Tími í lokin
 const seconds = ((seconds_end - seconds_start)/1000).toFixed(2); //mismunur loka og upphafstíma
 const avg = (rett/seconds).toFixed(2); //meðalfjöldi réttra spurninga á sekúndu

 if(spila === true){
  alert("Þú svaraðir " + rett + " af " + GAMES_TO_PLAY + " dæmum rétt á " + seconds + " sekúndum \n Meðalrétt svör á sekúndu eru " + avg);
}
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda prompt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
let r = Question(randomNumber(0,3));
if(r === null){
  alert('Hætt í leik');
  return null;
}
}

function Question(random){

  if(random == 0) {
    let a = randomNumber(1,100);
    let b = randomNumber(1,100);
    const input = prompt('Hvað er ' + a + '+' + b + '?');
    if(parseInt(input) === a+b)
    rett++;
    if(input === null)
    return null;
  }

  if(random == 1){
    let a = randomNumber(1,100);
    let b = randomNumber(1,100);
    const input = prompt('Hvað er ' + a + '-' + b + '?');
    if(parseInt(input) === a-b)
    rett++;
    if(input === null)
    return null;
  }

  if(random == 2){
    let a = randomNumber(1,10);
    let b = randomNumber(1,10);
    const input = prompt('Hvað er ' + a + '*' + b + '?');
    if(parseInt(input) === a*b)
    rett++;
    if(input === null)
    return null;
  }

  if(random == 3) {
    let a = randomNumber(2,10);
    let b = a*randomNumber(2,10);
    const input = prompt('Hvað er ' + b + '/' + a + '?');
    if(parseInt(input) === b/a)
    rett++;
    if(input === null)
    return null;
  }

}


/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
