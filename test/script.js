// const text = document.getElementById("text");
// const words = text.innerText.split(" ");

// text.innerHTML = words
//   .map((word) => `<span class="word">${word}</span>`)
//   .join(" ");

// const spans = document.querySelectorAll(".word");

// document.addEventListener("scroll", () => {
//   const pos = window.scrollY / 200;

//   spans.forEach((span, index) => {
//     if (pos > index) {
//       span.style.color = "white";
//       span.style.textShadow =
//         "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa";
//     } else {
//       span.style.color = "black";
//     }
//   });

//   console.log(pos);
// });

let regsiter = document.getElementById("register");

regsiter.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("inputUsername").value;

  let error_message = document.getElementById("error_message");

  console.log(username);

  if (username == "") {
    error_message.innerText = "Invalid Input";
    return;
  }

  error_message.innerText = "";
});
