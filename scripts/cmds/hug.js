// hug.js
// Goat Bot Hug Command

module.exports = {
    config: {
        name: "hug",
        aliases: [],
        version: "1.0",
        author: "Md",
        role: 0,
        shortDescription: "Send a warm hug",
        longDescription: "Give a virtual hug to someone with emoji and GIF",
        category: "fun",
        guide: {
            en: "{pn} <name>"
        }
    },

    onStart: async function ({ api, event, args }) {
        const senderName = event.senderName;
        const targetName = args[0] || "Friend";

        const replyText = `😍 I've just hugged ${targetName}! ${senderName} is giving a warm hug to ${targetName}! 🤗💖`;

        // GIF/IMAGE link (নিজের পছন্দমতো লিঙ্ক বসাও)
        const hugImage = "https://media.tenor.com/2roX3uxz_68AAAAC/hug.gif";

        api.sendMessage({
            body: replyText,
            attachment: await global.utils.getStreamFromURL(hugImage)
        }, event.threadID, event.messageID);
    }
};
