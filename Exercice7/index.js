const input = document.getElementById('decimalInput');
const result = document.getElementById('binaryResult');


const convertToBinary = () => {
    let num = input.value;

    let binary = (num % 2).toString();

    for (let i = 1; num > 1; i++) {
        num = parseInt(num / 2);
        // Grâce à toString(), on peut concaténer un nombre avec une chaîne de caractères
        // et ainsi avoir notre nombre binaire dans le bon ordre
        binary = (num % 2) + binary;
    }
    return (result.textContent = binary);
};

/* 
 Version alternative


const convertToBinary = () => {
    let decimalToBinary = Number(input.value);
    result.textContent = decimalToBinary.toString(2);
};

*/
