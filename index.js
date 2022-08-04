// Neccesary class imports
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// New client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('Client is ready.');
});

// Log into Discord
client.login(token);
