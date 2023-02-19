// selecting element representing the "redWidget"
const redWidget = document.querySelector(".chat-widget__side");

// adding "onclick" behaviour so that by clicking on
// "redWidget" the appropriate class is enhansed by "chat-widget_active"
// making the dialog window visible (see css properties)
redWidget.onclick = () => {
    const activateChat = document.querySelector(".chat-widget");
    activateChat.classList.add("chat-widget_active");
};

// creating the array of bot's replies
let replies = [
    "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
    "Где ваша совесть?",
    "Кто тут?",
    "Идите лесом",
    "Я вам ничего не продам!",
];

// function to choose a random reply from the array
function randomReply(replies) {
    let rand = Math.floor(Math.random() * replies.length);
    return replies[rand];
}

// selecting the DOM element representing the input box
const userInput = document.getElementById("chat-widget__input");

// adding EventListener so that on hitting the "enter" key on the keyboard
// the message go from input box to the dialog window ("change" event)
userInput.addEventListener("change", (e) => {
    // selecting the element responsible for dialog window
    const messages = document.querySelector(".chat-widget__messages");
    // saving the message we typed on the keyboard to a variable by addressing .value property of event.target
    const currentMessage = e.target.value.trim();
    // creating the current time variable
    let date = new Date();
    let localTime = date.toLocaleTimeString();
    // creating additional html blocks with our text and local time
    // by addressing innerHTML of previously selected element responsible for dialog window
    if (currentMessage !== "") {
        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time"> ${localTime} </div>
        <div class="message__text">
            ${currentMessage}
        </div>
        </div>
        `;
        // choosing bot's reply by calling on the "randomizing" function
        // saving the random reply to a variable
        const currentBotReply = randomReply(replies);
        // creating additional html blocks with bot's random reply and local time
        // by addressing innerHTML of previously selected element responsible for dialog window
        messages.innerHTML += `
        <div class="message">
        <div class="message__time"> ${localTime} </div>
        <div class="message__text">
            ${currentBotReply}
        </div>
        </div>
        `;
        // clearing the input box from our message
        userInput.value = "";
    }
});
