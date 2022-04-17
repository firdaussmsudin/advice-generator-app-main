getAdvice();

function getAdvice() {
  fetch("	https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let returnedApi = data["slip"];
      document.getElementById("advice-number").innerHTML =
        "Advice #" + returnedApi["id"];
      document.getElementById("advice-details").innerHTML =
        '"' + returnedApi["advice"] + '"';
    });
}

document.getElementById("img-dice-background").addEventListener("click", getAdvice);