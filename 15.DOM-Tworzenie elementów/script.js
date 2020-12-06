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
