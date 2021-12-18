function toggleLike() {
  this.classList.toggle("fas");
  this.classList.toggle("far");
}
function addLikeListener(element) {
  element.addEventListener("click", toggleLike);
}

function buyCoffee() {
  let coffeeNum = prompt("\nHow many coffees are you buying?\n");
  if (coffeeNum == null) {
  } else if (coffeeNum == 0) {
    alert(
      "\nThat's alright...glad to show you my work!\n Take care of your plants :)\n"
    );
  } else if (coffeeNum < 3) {
    alert("\nThanks! \nI'll enjoy these next to my plants 😊☕🌿\n");
  } else if (coffeeNum >= 3) {
    alert(
      "\nWoah, that's a lot of coffees! \nThank you for appreciating my work so much 😊\n"
    );
  }
}

let allLikeButtons = document.querySelectorAll(".like-button");
allLikeButtons.forEach(addLikeListener);

let coffeeButton = document.querySelector(".coffee-button");
coffeeButton.addEventListener("click", buyCoffee);
