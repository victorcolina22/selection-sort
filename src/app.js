/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardsContainer = document.querySelector(".cards"),
    sortedCards = document.querySelector(".sortedCards"),
    number = document.querySelector(".number"),
    input = document.querySelector(".input"),
    add = document.querySelector(".add"),
    sort = document.querySelector(".sort"),
    reset = document.querySelector(".reset");

  const cardsNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];
  const cardsSuit = ["spade", "heart", "club", "diamond"];
  let newArray = [];

  add.addEventListener("click", () => {
    for (let i = 0; i < input.value; i++) {
      const randomNumber = Math.floor(Math.random() * cardsNumber.length);
      const numberSelected = cardsNumber[randomNumber];

      const randomSuitNumber = Math.floor(Math.random() * cardsSuit.length);
      const suitSelected = cardsSuit[randomSuitNumber];

      let card = document.createElement("div");
      card.classList.add("table__card");
      card.classList.add(suitSelected);
      let number = document.createElement("h1");
      number.classList.add("number");
      number.textContent = numberSelected;
      card.append(number);

      cardsContainer.append(card);
      newArray.push({ card: numberSelected, suit: suitSelected });
    }
    console.log(newArray);
    input.value = "";
  });

  const bubbleSort = arr => {
    let wall = arr.length - 1;
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        if (arr[index].card > arr[index + 1].card) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--;
    }
    return arr;
  };

  sort.addEventListener("click", () => {
    if (newArray.length === 0) return;

    document.querySelector(".sorting").style.display = "block";
    document.querySelector(".sorting").querySelector("h1").style.display =
      "block";
    bubbleSort(newArray);
    console.log(newArray);

    newArray.forEach(item => {
      let card = document.createElement("div");
      card.classList.add("table__card");
      card.classList.add(item.suit);
      let number = document.createElement("h1");
      number.classList.add("number");
      number.textContent = item.card;
      card.append(number);

      sortedCards.append(card);
    });
  });

  reset.addEventListener("click", () => {
    document.querySelectorAll(".table__card").forEach(item => {
      item.remove();
    });
    document.querySelector(".sorting").querySelector("h1").style.display =
      "none";
    newArray = [];
  });
};
