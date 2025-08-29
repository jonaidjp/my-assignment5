let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

function increaseHeart() {
  heartCount++;
  document.getElementById("heartCount").innerText = heartCount;
}

function copyNumber(number, service) {
  navigator.clipboard.writeText(number).then(() => {
    alert(${service} number (${number}) copied!);
    copyCount++;
    document.getElementById("copyCount").innerText = copyCount;
  });
}

function callService(service, number) {
  if (coinCount < 20) {
    alert("Not enough coins to make a call!");
    return;
  }
  coinCount -= 20;
  document.getElementById("coinCount").innerText = coinCount;

  alert(Calling ${service} at ${number}...);

  // Add to history with time
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  const li = document.createElement("li");
  li.textContent = ${service} (${number}) - ${timeString};
  document.getElementById("historyList").appendChild(li);
}