const loveBtn = document.getElementById("love-btn");
const loveCounter = document.getElementById("love-counter");

const firesbase = "https://love-send-js.firebaseio.com/onlinecounter.json";

let counter;

function get() {
  axios
    .get(firesbase)
    .then((response) => {
      counter = response.data.counter;
      updateCounter();
    })
    .catch((err) => console.log(err));
}

function updateCounter() {
  loveCounter.innerHTML = `${counter} visitors ❤️ this website`;
}

loveBtn.addEventListener("click", function (e) {
  axios
    .put(firesbase, {
      counter: counter + 1
    })
    .then(() => {
      get();
    })
    .catch((error) => console.log(error));
  console.log(e);
});

get();
