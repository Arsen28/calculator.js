let romanian = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

let romanianObject = {
  "I": "1",
  "II": "2",
  "III": "3",
  "IV": "4",
  "V": "5",
  "VI": "6",
  "VII": "7",
  "VIII": "8",
  "IX": "9",
  "X": "10"
};

const calculator = (string) => {
  let minusArr = string.split(' - ');
  let plusArr = string.split(' + ');
  let divideArr = string.split(' / ');
  let multArr =string.split(' * ');
  let all = string.trim().split(' ');

  if(all.length == 3 && (all[0] > 10 || all[2] > 10)){
    throw new Error('more than 10');
  }

  if(all.length !== 3) {
    throw new Error('err');
  }
  if(all[0]== 0 || all[2] == 0){
        throw new Error('0 nuli');
  }
  let a = checkIfRomanian(all[0]);
  let b = checkIfRomanian(all[2]);

  if(a != undefined && b == undefined){
              throw new Error('more romanian number');

  }
  if(a == undefined && b != undefined){
        throw new Error('more romanian number');
  }
  if (a != undefined && b != undefined) {
      return calculatorRomain(a, b, all[1]);
  }
  else {
    if (minusArr.length != 1) {
      return minusArr.reduce(
        (result, curretn) => {
          return (+result-(+curretn)).toString() 
        });
    }
    else if(plusArr.length != 1) {
        return plusArr.reduce(
          (result, curretn) => {
            return (+result+(+curretn)).toString() 
          });
    }
    else if(divideArr.length != 1) {
        return divideArr.reduce(
          (result, curretn) => { 
            return Math.floor((+result/(+curretn))).toString() 
          });
    }
    else if(multArr.length != 1) {
        return multArr.reduce(
          (result, curretn) => {
            return (+result*(+curretn)).toString() 
          });
    }
    else{
      throw new Error("undefined  sympol %");
    }
  }
  
}

const checkIfRomanian = (string) => {

  if(Array.isArray(romanian)) {
     return romanian.find(element => element === string);     
  }
 
}

const convertRomanianToInt = (simbol) => {
  if(simbol in romanianObject) {
    return romanianObject[simbol];
  }

}


const calculatorRomain = (a, b, operator) => {

  let result = "";
  a = parseInt(convertRomanianToInt(a), 10);
  b = parseInt(convertRomanianToInt(b), 10);
 

  switch(operator) {
    case "+":
      result = a + b;
      break;
    case "-":
    if(a<b){
      result = "";
    }else{
      result = a - b;
      }
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result =  Math.floor(a/b);
      break;
    default:
    throw new Error("undefined romainian simbol2");

  }
  return convert(result).toString();
}


let codes = [
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C"],
  ["", "C"]
];

const convert = num => {
  let numeral = "";
  let digits = num
    .toString()
    .split("")
    .reverse();
  for (let i = 0; i < digits.length; i++) {
    numeral = codes[i][digits[i]] + numeral;
  }
  return numeral;
};

 console.log(calculator('III / II '));
 