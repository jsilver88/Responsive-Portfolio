const logo = document.querySelector("#logo");

logo.addEventListener("mouseover", function (e) {
  console.log(e);
  logo.classList.toggle("active");
});
