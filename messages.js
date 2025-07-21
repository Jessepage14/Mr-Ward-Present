const messagesSection = document.getElementById('messages-section');
let messages = [
    {name: "Jesse", text: "Thank you for being the best teacher ever!"},
    {name: "Daniyyel", text: "Thank you for always respecting us!"},
    {name: "Keanh", text: "Thank you for being supportive and kind to everyone and me.Thank you for being the best.Thank you."},
    {name: "James", text: "Thank you so much for everything,you have been a fabulous teacher to everyone.although I am moving to secondary I will always keep you in my heart"},
    {name: "Zachary", text:"Your the best and you always will be also your class are the luckiest to have you next year :)"},
];
function renderMessages() {
    messagesSection.innerHTML = `<h3>Message Board</h3>
        <form id="msg-form">
            <input id="msg-name" placeholder="Your name" maxlength="20" required>
            <textarea id="msg-text" placeholder="Your message" maxlength="120" required></textarea>
            <button type="submit">Send</button>
        </form>
        <div id="msg-list">
            ${messages.map(m => `<div class="message"><b>${m.name}:</b> ${m.text}</div>`).join('')}
        </div>
    `;
    document.getElementById('msg-form').onsubmit = e => {
        e.preventDefault();
        const name = document.getElementById('msg-name').value.trim();
        const text = document.getElementById('msg-text').value.trim();
        if (name && text) {
            messages.unshift({name, text});
            renderMessages();
        }
    };
}
renderMessages();