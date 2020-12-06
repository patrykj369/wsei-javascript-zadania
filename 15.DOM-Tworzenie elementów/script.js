//Zadanie 1
const element = document.createElement("div");
element.innerHTML = "To jest nowy element"

document.body.appendChild(element);

//Zadanie 2
const fruits = ["banan", "jablko", "truskawka", "granat", "arbuz", "czeresnia"]
const ul = document.createElement("ul")

fruits.forEach( item => {
    const li = document.createElement("li")
    li.innerHTML = item;
    ul.appendChild(li)

})

document.appendChild(ul);

//Zadanie 3
ul.addEventListener("click", () => {
    ul.querySelectorAll("li:nth-of-type(odd)").forEach( item => {
        item.remove();
    })
})

//Zadanie 4
const button = document.createElement("button");
button.innerHTML = "delete";
document.body.appendChild(button);

button.addEventListener("click", e => {
    e.target.remove();
})

//Zadanie 5
const randomNumber = Math.floor(Math.random() * 15);
for (let i = 0; i < randomNumber; i++) {
    const randomDiv = document.createElement("div");
    randomDiv.innerText = "to jest div numer: " + i;
    document.body.appendChild(randomDiv);
    
}

//Zadanie 6
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const span1 = document.createElement("span");
const span2 = document.createElement("span");

div1.textContent = "to jest div";
div3.textContent = "to jest div";
span1.textContent = " to jest span";
span2.textContent = "to jest span";

div2.appendChild(div3);

document.body.appendChild(div1);
document.body.appendChild(span1);
document.body.appendChild(div2);
document.body.appendChild(span2);

//Zadanie 7 
const sampleArray = ["el1", "el2", "el3", "el4", "el5", "el6"];
const list1 = document.createElement("ul");
const list2 = document.createElement("ul");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const buttonText = "move";



sampleArray.forEach( item => {
    const li = document.createElement("li");
    li.innerText = item;
    list1.appendChild(li);
})

document.body.appendChild(list1);
document.body.appendChild(button1);
button1.textContent = buttonText;

button1.addEventListener("click", () => {
    const lastItemList1 = list1.lastChild;
    const lastItemList2 = list2.lastChild;

    list2.insertBefore(lastItemList1, lastItemList2)

    if(list1.children.length === 0){
        button1.disabled = true;
    }
    else {
        button2.disabled = false;
    }

})

document.body.appendChild(list2);
document.body.appendChild(button2);
button2.textContent = buttonText;

button2.addEventListener("click", () => {
    const lastItemList1 = list1.lastChild;
    const lastItemList2 = list2.lastChild;

    list1.insertBefore(lastItemList2, lastItemList1)

    if(list2.children.length === 0){
        button2.disabled = true;
    } 
    else {
        button1.disabled = false;
    }

})
//Zadanie 8
const form = document.createElement("form");
const input = document.createElement("input");
const br1 = document.createElement("br");
const span = document.createElement("span")
const br2 = document.createElement('br');
const button = document.createElement("button");

const spantext = "element type, text color, how many elements"; 
const buttonText = "Utwórz";

form.appendChild(span);
form.appendChild(br1);
form.appendChild(input);
form.appendChild(br2);
form.appendChild(button);
document.body.appendChild(form);

span.textContent = spantext;
button.textContent = buttonText;

button.addEventListener("click", e => {
    e.preventDefault();

    const inputValue = input.value;
    const elements = inputValue.split(' ');
    console.log(elements)
    for (let i = 0; i < elements[0]; i++) {
        const element = document.createElement(elements[3]);
        element.textContent = elements[1];
        element.style.color = elements[2];
        document.body.appendChild(element);
        
    }
})
