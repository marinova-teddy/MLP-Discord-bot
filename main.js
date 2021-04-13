const token = require("./auth.json").token;
const Discord = require("discord.js");
const client = new Discord.Client();

var possible_ingredients = [
    /* selenchuci*/ "cucumber", "tomato", "potato",
    /* mescenca  */ "chicken", "pork", "veal", "pp",
    /* plodchenca*/ "apple", "grapefruit", "tedimarinova"
];

var pending_ingredient = null;

var members = {}



function getRandomIngredient() {
    if(pending_ingredient) return; // Ако имаме вече активна, невзета съставка, не създаваме нова.

    client.channels.fetch("765206373285625868") // Взимаме канала bot testing
        .then(function(channel) {
            // Math е библиотека в JavaScript. Math.random() - число от 0 до 1 (дробно). Math.floor() - закръгляне надолу.
            const chosen_ingredient = possible_ingredients[Math.floor(Math.random()* possible_ingredients.length)] // Избираме някаква съставка, като взимаме от масива произволен индекс от 0 до дължината му
            pending_ingredient = chosen_ingredient; // Активната съставка ще ни е тази, която сме избрали.
            channel.send(chosen_ingredient); // Пращаме името на съставката
        })
        .catch(console.log);
}

client.on("ready", function() {
    setInterval(getRandomIngredient, 5000); // Викаме фунцкията всеки 5000 милисекунди, демек 5 секунди.
});

client.on("message", function(message) {
    if(message.author.bot) return;
    if(message.content === pending_ingredient) { // Ако съобщението е съставката, (скоро) ще я записваме за взета
        pending_ingredient = null; // Нямаме взета съставка
    }
    return;
})




client.login(token);