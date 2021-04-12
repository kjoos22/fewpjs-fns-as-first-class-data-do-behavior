/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
const greetingArea = document.getElementById("greeting")

/* Write your implementation of greet() */
function greet(timeInput) {
  if (timeInput.split(":")[0] < 12) {
    return "Good Morning"
  } else if (timeInput.split(":")[0] >= 12 && timeInput.split(":")[0] < 17) {
    return "Good Afternoon"
  } else if (timeInput.split(":")[0] >= 17) {
    return "Good Evening"
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(message) {
  greetingArea.innerText = message
}