function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
        return;
    }
    appendMessage(userInput, "sent");
    document.getElementById("user-input").value = "";
    // Call function to send user input to backend and receive response
    receiveResponse(userInput);
}

function receiveResponse(userInput) {
    // Assume this is a placeholder function to receive response from backend
    // and display it in chat
    var response = "Placeholder response to: " + userInput;
    appendMessage(response, "received");
}

function appendMessage(message, type) {
    var chatBox = document.getElementById("chat-box");
    var chatMessage = document.createElement("div");
    chatMessage.textContent = message;
    chatMessage.classList.add("chat-message", type);
    chatBox.appendChild(chatMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}
