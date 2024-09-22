//* Variables
let myItems = document.querySelectorAll(".item"); // callection of elements in Node list
let myLayer = document.querySelector(".layer"); // single element Layer Show when Click
let currentIndex = null; //  current index when Slide Right Or Left
let myI = document.querySelector("#focus"); // Middle Element icon

//* Functions
function slide(step) {
  // Slide Right Or Left When Send 1 Or -1
  currentIndex += step;
  /*
  1 => currentIndex = currentIndex + 1
  -1 => currentIndex = currentIndex - 1
   */
  if (currentIndex == -1) {
    // before this is not exist in myItems go to the last index
    currentIndex = myItems.length - 1;
  } else if (currentIndex == myItems.length) {
    // after this is not exist in myItems go to the first index
    currentIndex = 0;
  }

  let myImage = myItems[currentIndex].querySelector("img").getAttribute("src");
  myLayer.querySelector(".container").style.backgroundImage = `url(${myImage})`;
}

function blurWindow() { // When click on blur , Esc
  myLayer.classList.replace("d-flex", "d-none");
  currentIndex = null;
}

//* Event Listeners
for (let i = 0; i < myItems.length; i++) {
  myItems[i].addEventListener("click", function (e) {
    currentIndex = i;
    myLayer.classList.replace("d-none", "d-flex");
    let myImage = myItems[i].querySelector("img").getAttribute("src");
    myLayer.querySelector(
      ".container"
    ).style.backgroundImage = `url(${myImage})`;
  });
}

myI.nextElementSibling.addEventListener("click", function () {
  slide(1);
});

myI.previousElementSibling.addEventListener("click", function () {
  slide(-1);
});

myI.addEventListener("click", function () { // Middle Element icon X
  blurWindow();
});

myLayer.addEventListener("click", function (e) { // When click on blur
  if (e.target == e.currentTarget) {
    blurWindow();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    slide(1);
  } else if (e.key == "ArrowLeft") {
    slide(-1);
  } else if (e.key == "Escape") {
    blurWindow();
  }
});

// event delegetions to search
