const countValue = document.querySelector('#countVal');

const increment = () =>{
    // getting value
    let value = parseInt(countValue.innerText);
    // uodating
    value++;
    // setting val
    countValue.innerText = value;
} 
const decrement = () =>{
    let value = parseInt(countValue.innerText);
    value--;
    countValue.innerText = value;
} 
const reset = () => {
    countValue.innerText = 0;
}