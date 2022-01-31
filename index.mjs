// Require the necessary discord.js classes
// Using ES6 Modules for import/export keywords
import dotenv  from 'dotenv';
import { Client, Intents } from 'discord.js';

dotenv.config();

// Create a new client instance
const client = new Client({
    intents: [
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
    ]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Vroom!');
});

// Login bot using token
client.login(process.env.TOKEN); 