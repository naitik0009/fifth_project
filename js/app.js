let player1 = 0;
let player2 = 0;

const point = document.querySelector(".points");
const ul = document.querySelector("ul");
const li = document.querySelector(".li");
const lis = document.querySelector(".lis");
const select = document.querySelector("#select");

function statusS() {
  var value = select.options[select.selectedIndex].value;
  return value;
}

li.innerText = `Player one score = ${player1}`;
lis.innerText = `Player Two score = ${player2}`;

ul.append(li);
ul.append(lis);
point.append(ul);

const btnPlayerOne = document.querySelector("#p1");
const btnPlayerTwo = document.querySelector("#p2");
const btnReset = document.querySelector("#reset");
function disable() {
  btnPlayerOne.disabled = true;
  btnPlayerTwo.disabled = true;
}
function enable() {
  btnPlayerOne.disabled = false;
  btnPlayerTwo.disabled = false;
}
function playerOne() {
  if (player1 < statusS()) {
    player1++;
    if (player1 == statusS()) {
      console.log("player one is winner");
      li.classList.add("winner");
      lis.classList.add("loser");
      disable();
      li.innerHTML = `<b  > Player one score = ${player1} <b>`;
    }
  }

  if (player1 != statusS()) {
    li.innerText = `Player one score = ${player1}`;
  }
}

function playerTwo() {
  if (player2 < statusS()) {
    player2++;
    if (player2 == statusS()) {
      console.log("player two is winner");
      lis.classList.add("winner");
      li.classList.add("loser");
      disable();
      lis.innerHTML = `<b> Player two score = ${player2} <b>`;
    }
  }
  if (player2 != statusS()) {
    lis.innerText = `Player Two score = ${player2}`;
  }
}

function reset() {
  li.innerText = `Player one score = ${(player1 = 0)}`;
  lis.innerText = `Player Two score = ${(player2 = 0)}`;
  li.classList.remove("winner", "loser");
  lis.classList.remove("winner", "loser");
  enable();
}
btnPlayerOne.addEventListener("click", function (e) {
  playerOne();
});

btnPlayerTwo.addEventListener("click", function (e) {
  playerTwo();
});

btnReset.addEventListener("click", function (e) {
  reset();
});
