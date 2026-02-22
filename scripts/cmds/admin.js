const axios = require("axios");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "Mamun",
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");
    const cachePath = __dirname + "/cache/1.png";

    // ensure cache folder exists
    if (!fs.existsSync(__dirname + "/cache")) fs.mkdirSync(__dirname + "/cache");

    const callback = () => {
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
            attachment: fs.createReadStream(cachePath)
        }, event.threadID, () => fs.unlinkSync(cachePath));
    };

    try {
        // Fetch Facebook profile picture
        const fbID = "100057754863882"; // owner FB ID
        const accessToken = "YOUR_VALID_TOKEN_HERE"; // এখানে valid token বসাও
        const url = `https://graph.facebook.com/${fbID}/picture?height=720&width=720&access_token=${accessToken}`;
        const response = await axios({ url, responseType: 'stream' });
        response.data.pipe(fs.createWriteStream(cachePath)).on('close', callback);
    } catch (err) {
        console.error("❌ Error fetching owner image:", err.message);
        callback(); // image না আসলেও text পাঠাবে
    }
};
