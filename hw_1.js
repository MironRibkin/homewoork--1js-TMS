// Task 1
const block = document.querySelector('.block');
const none = document.querySelector('.none');
const div = document.getElementsByTagName('div');
div[0].style.width = "10vw";
div[0].style.height = "10vw";
div[0].style.backgroundColor = "#643213";
block.addEventListener('click', () => {
    div[0].style.display = 'block';
})
console.log(block);
none.addEventListener('click', () => {
    div[0].style.display = 'none';
})
console.log(none);


//Task 2
const addButton = document.querySelector('.add_input');
const list = document.querySelector('.list');
const input = document.querySelector('.hot_input');
addButton.addEventListener('click', () => {
    let listAdd = document.createElement("li");
    list.append(listAdd);
    listAdd.style.color = randomColor();
    listAdd.style.background = randomColor();
    listAdd.append(input.value)
})

const randomColor = () => {
    let element = '#';
    for (let i = 0; i < 6; i++) {
        element += Math.round((Math.random() * 9));
    }
    console.log(element);
    return element
}

