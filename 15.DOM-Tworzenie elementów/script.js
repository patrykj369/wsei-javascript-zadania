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
