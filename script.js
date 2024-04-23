const popupBox = document.querySelector(".notification");
const poupIcon = popupBox.querySelector(".material-symbols-outlined");
const connectionTitle = popupBox.querySelector("h3");
const opoupDsce = popupBox.querySelector("p");
const reconnectBtn = popupBox.querySelector(".reconnect");
console.log(opoupDsce);
let isOnline = true;

const checkConnection = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    isOnline = response.status >= 200 && response.status < 300;
  } catch (error) {
    isOnline = false;
  }

  handelPopup(isOnline);
};
//#3592d7a3
const handelPopup = (status) => {
  if (status) {
    poupIcon.innerHTML = `<span class="material-symbols-outlined">wifi</span>`;
    connectionTitle.innerHTML = `<h3>Restored Connection</h3>`;
    opoupDsce.innerHTML = `<p>Your device is now successfully connected to the internet.</p>`;
    reconnectBtn.style.background = "#3592d7a3";
    setTimeout(() => {
      popupBox.classList.remove("show");
    }, 3000);
    return;
  } else {
    poupIcon.innerHTML = `<span class="material-symbols-outlined"> wifi_off </span>`;
    connectionTitle.innerHTML = `<h3>Lost Connection</h3>`;
    opoupDsce.innerHTML = `<p>Oops! Your Network Is Unavailable. please connect the network quick.</p>`;
    reconnectBtn.style.background = "#3592d7";
  }
  popupBox.classList.add("show");
};

setInterval(() => {
  checkConnection();
}, 5000);
reconnectBtn.addEventListener("click", checkConnection);
