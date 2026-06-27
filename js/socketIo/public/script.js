const submitBtn = document.getElementById("submitBtn");
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("userInput");
const chatContainer = document.getElementById("chat-container");
const form = document.getElementById("form");

const socket = io();


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const messages = userInput.value.trim();

  if (messages) {
    socket.emit("message", messages);
    userInput.value = "";
  }
  // const li = document.createElement("div");
  // li.textContent =`YOU:  ${messages}`;
  // chatContainer.appendChild(li);
  // chatContainer.scrollTop = chatContainer.scrollHeight;
})

socket.on("message", (data) => {
  const li = document.createElement("div");
  li.textContent = `User:  ${data}`;
  chatContainer.appendChild(li);
  chatContainer.scrollTop = chatContainer.scrollHeight;
})