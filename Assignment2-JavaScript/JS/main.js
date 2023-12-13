"use strict";

var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Be yourself; everyone else is already taken. ― Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ― Albert Einstein",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ― Bernard M. Baruch"
];

var currentRandomIndex = -1;

function generateQuote() {
    if (quotes.length > 0) {
        var newRandomIndex;
        do {
            newRandomIndex = Math.floor(Math.random() * quotes.length);
        } while (newRandomIndex === currentRandomIndex);

        currentRandomIndex = newRandomIndex;
        document.getElementById("quote").innerText = quotes[currentRandomIndex];
    } else {
        console.error("No quotes available.");
    }
}