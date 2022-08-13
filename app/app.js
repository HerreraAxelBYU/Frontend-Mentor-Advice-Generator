const number = document.querySelector('#id_number');
const advice_container = document.querySelector('#advice')
const btn_generador = document.querySelector('#boton')



window.onload = () => {
    consejo();
}

const consejo = () => {

    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json()
    }).then(adviceData => {
        const adviceobj = adviceData.slip;
        console.log(adviceobj)
        number.innerHTML = adviceobj.id
        advice_container.innerHTML = adviceobj.advice
    }).catch(error => {
        console.log(error);

})

}

btn_generador.addEventListener('click', () => {
    consejo();
})





  