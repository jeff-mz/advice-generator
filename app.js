const $ = document;
const copyBtn = document.querySelector('.copy');
const generateBtn = document.querySelector('.generate');
const advice = document.querySelector('.advice');
const adviceNumber = document.querySelector('.number');

const generateAdvice = function () {
    fetch('https://api.adviceslip.com/advice')
        .then((res) => {
            return res.json()
        }).then((data) => {
            adviceNumber.textContent = `advice #${data.slip.id}`
            advice.innerHTML = `<q> ${data.slip.advice} </q>`
        }).catch((err) => {
            alert('Something want wrong !try again.')
        });
};
const copyAdvice = function () {
    navigator.clipboard.writeText(advice.textContent);
    copyBtn.innerHTML = `<i class='fas fa-check-circle'></i>`
    setTimeout(() => {
        copyBtn.innerHTML = `<i class='far fa-clipboard'></i>`
    }, 1000);
};

copyBtn.addEventListener('click', copyAdvice);
generateBtn.addEventListener('click', generateAdvice);


