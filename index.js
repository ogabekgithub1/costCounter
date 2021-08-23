let SUMMA = prompt('Mablagingizni kiriting');

let tolovUsd1 = 500;
let tolovUsd2 = 250;
let tolovEur = 120;

let xarajat1 = tolovUsd1 *  9433.34;
let xarajat2 = tolovUsd2 * 9433.34;
let xarajat3 = tolovEur * 10354.03;

let jami = xarajat1 + xarajat2 + xarajat3;

if(SUMMA >= jami){
    alert(`Oq yo’l, Alisher!`)
}else{
    alert(`Alisher, ozgina sabr qilish kerak bo’lar ekan.`)
}