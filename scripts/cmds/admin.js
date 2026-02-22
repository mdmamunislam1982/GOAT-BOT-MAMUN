const axios = require("axios");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.2.0",
    hasPermssion: 0,
    credits: "Mamun",
    description: "Show Owner Info with chat running",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event, usersData }) {
    const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");
    const cachePath = __dirname + "/cache/1.png";

    if (!fs.existsSync(__dirname + "/cache")) fs.mkdirSync(__dirname + "/cache");

    const sendOwnerInfo = () => {
        api.sendMessage({
            body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 Name      : M A M U N ッ
┃ 🚹 Gender    : Male
┃ ❤️ Relation  : Single
┃ 🎂 Age       : 19
┃ 🕌 Religion   : Islam
┃ 🏫 Education : Inter 1st Year
┃ 🏡 Address   : Rajshahi, Bangladesh
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 Tiktok    : Mamun01
┃ 📢 Telegram  : t.me/John_USA90
┃ 🌐 Facebook  : https://www.facebook.com/md.mamun.islam3210
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 Updated Time: ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
            `,
            attachment: fs.existsSync(cachePath) ? fs.createReadStream(cachePath) : null
        }, event.threadID, () => {
            if (fs.existsSync(cachePath)) fs.unlinkSync(cachePath);
        });
    };

    try {
        // FB Profile pic fetch
        const fbID = "100057754863882";
        const accessToken = "YOUR_VALID_TOKEN_HERE"; // valid token লাগবে
        const url = `https://graph.facebook.com/${fbID}/picture?height=720&width=720&access_token=${accessToken}`;
        const response = await axios({ url, responseType: "stream" });
        response.data.pipe(fs.createWriteStream(cachePath)).on("close", sendOwnerInfo);
    } catch (err) {
        console.error("❌ Owner image error:", err.message);
        sendOwnerInfo(); // Image fetch না হলেও text যাবে
    }

    // --- Chat চালু রাখার জন্য ---
    if (!global.GoatBot) global.GoatBot = {};
    if (!global.GoatBot.onChat) global.GoatBot.onChat = new Map();

    global.GoatBot.onChat.set(event.threadID, async (chatEvent) => {
        const raw = chatEvent.body?.trim()?.toLowerCase();
        if (!raw) return;

        const replies = [
            "হাই! 😺", "কি খবর? 🫂", "আছি, বলো কী হয়েছে 🤖",
            "বাবু, কি করতে চাও? 😘", "হুম? বলো 😺"
        ];
        const reply = replies[Math.floor(Math.random() * replies.length)];

        api.sendMessage(reply, chatEvent.threadID);
    });
};
