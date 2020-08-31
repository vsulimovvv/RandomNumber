const minEl = document.querySelector(".min");
const maxEl = document.querySelector(".max");
const button = document.querySelector(".random");
const reset = document.querySelector(".reset");
const output = document.querySelector(".output");
const reload = document.querySelector(".reload");

function randomNumber(min, max) {
  if (!minEl.value) {
    checkMin(minEl);
    resetInputs();
    return;
  } else if (!maxEl.value) {
    checkMax(maxEl);
    resetInputs();
    return;
  }

  min = +minEl.value;
  max = +maxEl.value;
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  output.innerHTML = result;

  getResult();
}

function checkMin(minEl) {
  if (!minEl.classList.contains("shake")) {
    minEl.classList.add("shake");
    minEl.placeholder = "Введите число";
    setTimeout(() => {
      minEl.classList.remove("shake");
    }, 1000);
  }
}

function checkMax(maxEl) {
  if (!maxEl.classList.contains("shake")) {
    maxEl.classList.add("shake");
    maxEl.placeholder = "Введите число";
    setTimeout(() => {
      maxEl.classList.remove("shake");
    }, 1000);
  }
}

function getResult(min, max) {
  min = minEl.value;
  max = maxEl.value;
  const discription = document.createElement("div");
  discription.textContent = `Результат от: ${min} до ${max}`;
  discription.classList.add("result-output");
  output.insertAdjacentElement("afterbegin", discription);
}

function resetInputs() {
  minEl.value = "";
  maxEl.value = "";
  output.innerHTML = "Полученное число";
}

function makeReload() {
  window.location.reload();
}

button.addEventListener("click", randomNumber);
reset.addEventListener("click", resetInputs);
reload.addEventListener("click", makeReload);
