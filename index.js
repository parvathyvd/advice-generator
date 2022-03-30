const baseURL = 'https://api.adviceslip.com/advice';
const adviceAppLoad = document.getElementById('advice-app');
const advice__id__val = document.querySelector('.advice__id-val');
const advice__content = document.querySelector('.advice__content');
const advice__logo = document.querySelector('.advice__logo');

const getAdvice = async () => {
    console.log('loading')
    const res = await fetch(baseURL);
    const data =  await res.json();
    const advice = data.slip;
    console.log(advice)
    advice__id__val.innerHTML = `Advice # ${advice.id}`;
    advice__content.innerHTML = `${advice.advice}`;
}

document.addEventListener("DOMContentLoaded", getAdvice);
advice__logo.addEventListener('click', getAdvice)