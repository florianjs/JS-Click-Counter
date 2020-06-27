const downloadBtn = document.getElementById("download-btn");
const downloadCounter = document.getElementById("download-counter");

const firesbaseDownload =
  "https://love-send-js.firebaseio.com/downloadcounter.json";

let trackDownloads;

function getDownload() {
  axios
    .get(firesbaseDownload)
    .then((response) => {
      trackDownloads = response.data.trackDownloads;
      updateDownloadCounter();
    })
    .catch((err) => console.log(err));
}

function updateDownloadCounter() {
  downloadCounter.innerHTML = `(${trackDownloads} 📥)`;
}

downloadBtn.addEventListener("click", function (e) {
  axios
    .put(firesbaseDownload, {
      trackDownloads: trackDownloads + 1
    })
    .then(() => {
      getDownload();
    })
    .catch((error) => console.log(error));
});

getDownload();
