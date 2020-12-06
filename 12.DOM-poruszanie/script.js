//Zadanie 1
const buz = document.querySelector("#buz");
const baz = document.querySelector("#baz");
const foo = document.querySelector("#foo");

console.log(buz.parentElement);
console.log(baz.previousElementSibling);
console.log(foo.children);
console.log(foo.parentNode);
console.log(foo.firstElementChild);
console.log(foo.children[Math.floor(foo.children.length / 2)]);

//Zadanie 2
const displayText = (element) => {
    element.addEventListener("click", () => {
      const elementWithText = element.querySelector("div div div div div:nth-child(2) div div"); 
      const textToDisplay = elementWithText.innerHTML
      console.log(textToDisplay);
    });
};

//Zadanie 3
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const span = button.nextElementSibling;
      if (span.style.display === "none") {
        span.style.display = "block";
      } else {
        span.style.display = "none";
      }
    });
  })

//Zadanie 4
const ex3Divs = document.querySelectorAll('#ex3 button');

ex3Divs.forEach((div) => {
    div.addEventListener('click', (event) => {
        const parentElement = event.target.parentElement;
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        parentElement.style.backgroundColor = randomColor;
    })
})
