


let btn = document.getElementById("btn");
let number = 0;
btn.addEventListener("click", function () {
  number += 1;
  // console.log(number)
  btn.innerText = number;
});
