# Lesson: Intro to JavaScript Events

JavaScript events let your webpage respond to user actions — like clicking a button, typing in an input field, or hovering over an element.

# 🧠 What Are Events?

An event is something that happens in the browser — for example:

- Clicking a button (click)

- Typing in an input (input)

- Moving the mouse (mousemove)

- Submitting a form (submit)

# ⚡ Event Listeners

To make something happen when an event occurs, you use an event listener.

- element.addEventListener("eventType", callbackFunction);

- element → the HTML element to watch

- eventType → the event name (like "click", "input")

- callbackFunction → the code to run when the event happens

**Example**
const button = document.querySelector("button");

button.addEventListener("click", function() {
  alert("Button clicked!");
});

# 🧩 Callback Functions

The function you pass to addEventListner is called a callback — it’s called back when the event occurs.

function showMessage() {
  console.log("Hello there!");
}

button.addEventListener("click", showMessage);

# 🧰 The Event Object

Every event automatically sends information about what happened — this is the event object.

button.addEventListener("click", function(event) {
  console.log(event.target); // the element that was clicked
});


You can use it to access things like:

event.type → type of event (click, input, etc.)
pages
event.target → the element that triggered the event

# 🌟 Summary

Events make web pages interactive.

addEventListener() attaches an action to an event.

Callback functions run when the event happens.

The event object gives details about what occurred.

Would you like me to make the lab README next — the one explaining what students should do in the /lab part?

