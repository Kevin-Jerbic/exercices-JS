const createParagraph = () => {
    let p = document.createElement('p');
    let body = document.querySelector('body');
    body.appendChild(p);
    p.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
};

document.querySelector('button').addEventListener('click', createParagraph);
