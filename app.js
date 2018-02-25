const form = document.querySelector("form");
//console.log(form);

//esta función valida el cvv si el usuario no ingresa un input vacio, 
//si es un númeroy si es un dato de 3 cifras
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
//si no ingresa un input vacío 
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

const validateExpireDate = string => {
    const dateVal = string.value;
    if(dateVal !== ""){
        string.className = 'success';
        return true;
    }else{
        string.className = 'error';
        return false;
    }
}

const validateCardNumber = input => {
    const cardNumberVal = input.value;
    if(cardNumberVal === 'a'){
        input.className = 'success';
        return true;
    }else{
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
};

form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateCardDetails(form)) {
        console.log("datos válido... enviar...");
    } else {
        console.log("datos inválidos");
    }
});

