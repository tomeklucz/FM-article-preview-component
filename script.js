"use strict";

const buttons = document.querySelectorAll(".share-icon-container");
const shareWindow = document.querySelector(".share-window");

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    shareWindow.classList.toggle("hidden");
  })
);
