const form = document.querySelector("form");
//console.log(form);

//esta función valida el cvv si el usuario no ingresa un campo vacío, 
//si es un número positivo y si es un dato de 3 cifras
const validateCardCVV = number => {
    let value = parseInt(number.value);
    if (value !== "" && value < 1000 && value > 99 && typeof value === 'number') {
        number.className = 'success';
        return true;
    } else {
        number.className = 'error';
        return false;
    }
}
//esta función valida el nombre del usuario si: son dos palabras(nombre y apellido),
//si no ingresa un campo vacío 
const validateName = string => {
    let nameVal = string.value.toLowerCase();
    //console.log(nameVal);
    const array = nameVal.split(' ');
    if (array !== "" && array.length > 1 && array.length < 3) {
        string.className = 'success';
        return true;
        //console.log('yes');
    } else {
        string.className = 'error';
        return false;
        //console.log('no');
    }
}
// esta función valida la fecha de expiración si: el usuario no ingresa un campo vacío,y en el elemento del html 
//valida que se ingrese el mes y el año y que el año de vencimiento vaya del año 2000 al 2022
const validateExpireDate = string => {
    const dateVal = string.value;
    if (dateVal !== "") {
        string.className = 'success';
        return true;
    } else {
        string.className = 'error';
        return false;
    }
}
// esta función valida el número de tarjeta con el algoritmo de Luhn
const validateCardNumber = input => {
    let numValue = input.value;
    let cardArray = numValue.split('');
    //console.log(cardArray);
    let backwardsNumber = cardArray.reverse();
    //console.log(backwardsNumber);
    let even = 0;
    let odd = 0;
    let evenSum = 0;
    for (var i = 0; i < backwardsNumber.length; i++) {
        if (i % 2 !== 1) {
            odd += parseInt(backwardsNumber[i]);
            // console.log(backwardsNumber[i]);
        }
    }
    //console.log(odd);

    for (var j = 1; j < backwardsNumber.length; j++) {

        if (i % 2 === 0 && backwardsNumber[j] <= 4) {
            even += parseInt(backwardsNumber[j] * 2);
        } else if (j % 2 === 1 && backwardsNumber[j] == 5) {
            evenSum += parseInt(1);
        } else if (j % 2 === 1 && backwardsNumber[j] == 6) {
            evenSum += parseInt(3);
        } else if (j % 2 === 1 && backwardsNumber[j] == 7) {
            evenSum += parseInt(5);
        } else if (j % 2 === 1 && backwardsNumber[j] == 8) {
            evenSum += parseInt(7);
        } else if (j % 2 === 1 && backwardsNumber[j] == 9) {
            evenSum += parseInt(9);
        }
    }

    //console.log(even);
    //console.log(evenSum);
    let totalSum = odd + even + evenSum;
    //console.log(totalSum// console.log('valid'););

    if (totalSum % 10 === 0) {
        input.className = 'success';
        return true;
    } else {
        input.className = 'error';
        return false;
    }
}

const validateCardDetails = element => {
    const array = Array.from(element);
    //console.log(array);
    const cardNumber = array[0];
    //console.log(cardNumber);
    const expireDate = array[1];
    //console.log(expireDate);
    let cvv = array[2];
    //console.log(cvv);
    const name = array[3];
    //console.log(name);
    validateCardCVV(cvv);
    validateName(name);
    validateExpireDate(expireDate);
    validateCardNumber(cardNumber);
    if (validateCardCVV(cvv) === true && validateName(name) === true && validateExpireDate(expireDate) === true && validateCardNumber(cardNumber) === true){
        return true;
    }else{
        return false;
    }
};

form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateCardDetails(form) === true) {
        console.log("datos válido... enviar...");
    } else {
        console.log("datos inválidos");
    }
});

