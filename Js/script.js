/*jshint esversion: 6 */
let digit = 0;
const exeption = "80/23-2*10*6/23-6/11*12";
let temp = 0;
let result = 0;
firstItteration = true;
//check digits count
const checkDigit = (exeptionElement, elementIndex) => {
  exeptionElement.forEach((element, index) => {
    //check first element
    while (index < 1) {
      if (
        exeptionElement[index] &&
        exeptionElement[index + 1] != "+" &&
        exeptionElement[index] &&
        exeptionElement[index + 1] != "-" &&
        exeptionElement[index + 1].match(/[0-9]/)
      ) {
        exeptionElement[index] += exeptionElement[index + 1];
        exeptionElement.splice(index + 1, 1);
        index++;
      }
    }
    //check all next elements
    if (
      exeptionElement[index + 1] &&
      exeptionElement[index + 2] != "+" &&
      exeptionElement[index + 1] &&
      exeptionElement[index + 2] != "-" &&
      exeptionElement[index + 1] &&
      exeptionElement[index + 2] != "/" &&
      exeptionElement[index + 1] &&
      exeptionElement[index + 2] != "*" &&
      exeptionElement[index + 1].match(/[0-9]/)
    ) {
      exeptionElement[index + 1] += exeptionElement[index + 2];
      exeptionElement.splice(index + 2, 1);
    }
  });
  console.log(exeptionElement);
  return exeptionElement;
};
//checkDigit(exeption.split(""));

const addition = (ex) => {
  //   const exeptionElements = ex.split("");
  const exeptionElements = checkDigit(exeption.split(""));
  for (let i = 0; i <= exeptionElements.length; i++) {
    if (ex[i] === "+" && firstItteration === true) {
      temp = +exeptionElements[i - 1] + +exeptionElements[i + 1];
      result += temp;
      firstItteration = false;
      i++;
    }
    if (ex[i] === "+" && firstItteration == false) {
      result += +exeptionElements[i + 1];
    }
  }
  console.log(`temp= ${temp}\n result= ${result}`);

  // exeptionElements.forEach((element, index) => {
  //   if (exeptionElements[index].match(/[0-9]/)) {
  //     exeptionElements[index] = +element;
  //     result = +element;
  //   }
  //   // temp = exeptionElements[index].match(/[0-9]/);
  //   // exeptionElements[index] = +temp[0];
  // });
  //console.log(exeption);
};
addition(exeption);
