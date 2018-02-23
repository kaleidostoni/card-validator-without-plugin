const form = document.querySelector("form");
//console.log(form);

const validateTypeOfNumber = input => {
    typeof input == 'number';
}

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

const validateName = string => {
name.map(word =>{

})
}

const validateCardDetails = element => {
    const array = Array.from(element);
    //console.log(array);
    const cardNumber = array[0];
    //console.log(cardNumber);
    const expireDate = array[1].value;
    //console.log(expireDate);
    let cvv = array[2];
    //console.log(cvv);
    const name = array[3].value;
    //console.log(name);
    validateCardCVV(cvv);
    validateName(name);
};

form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateCardDetails(form)) {
        console.log("datos válido... enviar...");
    } else {
        console.log("datos inválidos");
    }
});

