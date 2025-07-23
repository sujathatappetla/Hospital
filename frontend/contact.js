let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "Howcan I help you?", "Thank You"];

let sendMsgBtn = document.getElementById("sendMsgBtn");

let chatContainer = document.getElementById("chatContainer");

let userInput = document.getElementById("userInput");

function getReplyFromChatBox() {

    let lengthOfChatBox = chatbotMsgList.length;

    let randomMsg = chatbotMsgList[Math.ceil(Math.random() *lengthOfChatBox) - 1];

    let chatMsgContainer = document.createElement("div");

    chatMsgContainer.classList.add("msg-from-chatbot-container");

    chatContainer.appendChild(chatMsgContainer);

    let chatMsg = document.createElement("span");

    chatMsg.classList.add("msg-from-chatbot");

    chatMsg.textContent = randomMsg;

    chatMsgContainer.appendChild(chatMsg);

}

function sendMsgToChat() {

    let userInputValue = userInput.value;

    let msgContainer = document.createElement("div");

    msgContainer.classList.add("msg-to-chatbot-container");

    chatContainer.appendChild(msgContainer);

    let userMsg = document.createElement("span");

    userMsg.classList.add("msg-to-chatbot");

    userMsg.textContent = userInputValue;

    msgContainer.appendChild(userMsg);

    userInput.value = "";

    getReplyFromChatBox();

}