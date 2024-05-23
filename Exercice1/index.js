//votre code ici
const pairNumbers = (nb1, nb2) => {
    let arr = [];
    for (let i = nb1; i <= nb2; i++) {
        arr.push(i);
    }
    return arr.filter(number => number % 2 === 0);
};

export default pairNumbers;

// pairNumbers(1,10); 
// Expected [2, 4, 6, 8, 10]