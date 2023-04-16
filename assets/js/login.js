var input = 0;
var resetting = false;
var pw = "";

function updateInputField(num) {
  pw += num;
  if (input < 5) {
    const element = document.getElementById("circle" + input);
    element.className = "input-icircle-filled";
    input++;
    return;
  }
  resetting = true;
  const element = document.getElementById("circle" + input);
  element.className = "input-icircle-filled";

  login();
}

function login() {
  if (pw == "123456") {
    const element = document.getElementById("body");
    element.classList.add("animation");
    reset(false);
    setTimeout(function () {
      window.location.href = "destination.html";
    }, 400);
    return;
  }
  reset(true);
}

async function reset(shake) {
  const e = document.getElementById("circles");
  if (shake) e.className = "shake";
  await delay(700);

  while (input >= 0) {
    const element = document.getElementById("circle" + input);
    element.className = "input-icircle";
    input--;
  }
  input = 0;
  const circles = document.getElementById("circles");
  circles.className = null;
  resetting = false;
  pw = "";
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

document.querySelectorAll("[numberField]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!resetting) {
      updateInputField(button.innerText);
    }
  });
});

document.addEventListener("keydown", function (event) {
  var key = event.key;

  if (/^[0-9]$/.test(key)) {
    if (!resetting) {
      updateInputField(key);
    }
  }
});
