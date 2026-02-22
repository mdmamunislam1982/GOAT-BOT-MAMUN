const { getTime, drive } = global.utils;
const { nickNameBot } = global.GoatBot.config;

module.exports = {
  config: {
    name: "welcome",
    version: "3.0",
    author: "const { getTime, drive } = global.utils;
const { nickNameBot } = global.GoatBot.config;

module.exports = {
  config: {
    name: "welcome",
    version: "3.0",
    author: "‎𝙼𝚊𝚖𝚞𝚗",
    category: "events"
  },

  langs: {
    en: {
      session1: "morning",
      session2: "noon",
      session3: "afternoon",
      session4: "evening",

      defaultWelcomeMessage:
`হাসি, মজা, ঠাট্টায় গড়ে উঠুক  
চিরস্থায়ী বন্ধুত্বের বন্ধন 🥰  
ভালোবাসা ও সম্পর্ক থাকুক আজীবন 💝  

➤ আশা করি আপনি এখানে হাসি-মজা করে আড্ডা দিতে ভালোবাসবেন 😍  
➤ সবার সাথে মিলেমিশে থাকবেন 😉  
➤ উস্কানিমূলক কথা বা খারাপ ব্যবহার করবেন না 🚫  
➤ গ্রুপ এডমিনের কথা শুনবেন ও রুলস মেনে চলবেন ✅  

›› প্রিয় {userName},  
আপনি এই গ্রুপের {memberCount} নম্বর মেম্বার!  
›› গ্রুপ: {threadName}  

💌 🌺 𝐖 𝐄 𝐋 𝐂 𝐎 𝐌 𝐄 🌺 💌  
𝙼𝚍 𝙼𝚊𝚖𝚞𝚗 𝙸𝚜𝚕𝚊𝚖`
    }
  },

  onStart: async ({ threadsData, message, event, api, usersData, getLang }) => {
    if (event.logMessageType !== "log:subscribe") return;

    const { threadID } = event;
    const threadData = await threadsData.get(threadID);

    if (!threadData.settings?.sendWelcomeMessage) return;

    const addedMembers = event.logMessageData.addedParticipants;
    const threadName = threadData.threadName;
    const hours = parseInt(getTime("HH"));

    for (const user of addedMembers) {
      const userID = user.userFbId;
      const botID = api.getCurrentUserID();

      // ✅ Bot Added
      if (userID == botID) {
        if (nickNameBot)
          await api.changeNickname(nickNameBot, threadID, botID);

        return message.send("🤖 ধন্যবাদ আমাকে গ্রুপে যুক্ত করার জন্য!");
      }

      const userName = user.fullName;
      const memberCount = event.participantIDs.length;
      const inviterName = await usersData.getName(event.author);

      let welcomeMessage =
        threadData.data?.welcomeMessage ||
        getLang("defaultWelcomeMessage");

      // ⏰ Session detect
      const session =
        hours < 11
          ? getLang("session1")
          : hours < 14
          ? getLang("session2")
          : hours < 18
          ? getLang("session3")
          : getLang("session4");

      welcomeMessage = welcomeMessage
        .replace(/\{userName\}/g, userName)
        .replace(/\{threadName\}/g, threadName)
        .replace(/\{memberCount\}/g, memberCount)
        .replace(/\{inviterName\}/g, inviterName)
        .replace(/\{session\}/g, session)
        .replace(/\{time\}/g, hours);

      const form = {
        body: welcomeMessage,
        mentions: [{ tag: userName, id: userID }]
      };

      // 📎 Attachment Support
      if (threadData.data?.welcomeAttachment) {
        const files = threadData.data.welcomeAttachment;

        const attachments = await Promise.allSettled(
          files.map(file => drive.getFile(file, "stream"))
        );

        form.attachment = attachments
          .filter(res => res.status === "fulfilled")
          .map(res => res.value);
      }

      await message.send(form);
    }
  }
}; (Updated by Mamun)",
    category: "events"
  },

  langs: {
    en: {
      session1: "morning",
      session2: "noon",
      session3: "afternoon",
      session4: "evening",

      defaultWelcomeMessage:
`হাসি, মজা, ঠাট্টায় গড়ে উঠুক  
চিরস্থায়ী বন্ধুত্বের বন্ধন 🥰  
ভালোবাসা ও সম্পর্ক থাকুক আজীবন 💝  

➤ আশা করি আপনি এখানে হাসি-মজা করে আড্ডা দিতে ভালোবাসবেন 😍  
➤ সবার সাথে মিলেমিশে থাকবেন 😉  
➤ উস্কানিমূলক কথা বা খারাপ ব্যবহার করবেন না 🚫  
➤ গ্রুপ এডমিনের কথা শুনবেন ও রুলস মেনে চলবেন ✅  

›› প্রিয় {userName},  
আপনি এই গ্রুপের {memberCount} নম্বর মেম্বার!  
›› গ্রুপ: {threadName}  

💌 🌺 𝐖 𝐄 𝐋 𝐂 𝐎 𝐌 𝐄 🌺 💌  
const { getTime, drive } = global.utils;
const { nickNameBot } = global.GoatBot.config;

module.exports = {
  config: {
    name: "welcome",
    version: "3.0",
    author: "ALVI-BOSS (Updated by Mamun)",
    category: "events"
  },

  langs: {
    en: {
      session1: "morning",
      session2: "noon",
      session3: "afternoon",
      session4: "evening",

      defaultWelcomeMessage:
`হাসি, মজা, ঠাট্টায় গড়ে উঠুক  
চিরস্থায়ী বন্ধুত্বের বন্ধন 🥰  
ভালোবাসা ও সম্পর্ক থাকুক আজীবন 💝  

➤ আশা করি আপনি এখানে হাসি-মজা করে আড্ডা দিতে ভালোবাসবেন 😍  
➤ সবার সাথে মিলেমিশে থাকবেন 😉  
➤ উস্কানিমূলক কথা বা খারাপ ব্যবহার করবেন না 🚫  
➤ গ্রুপ এডমিনের কথা শুনবেন ও রুলস মেনে চলবেন ✅  

›› প্রিয় {userName},  
আপনি এই গ্রুপের {memberCount} নম্বর মেম্বার!  
›› গ্রুপ: {threadName}  

💌 🌺 𝐖 𝐄 𝐋 𝐂 𝐎 𝐌 𝐄 🌺 💌  
‎🤖 𝙱𝚘𝚝 𝙾𝚠𝚗𝚎𝚛 : 𝙼𝚊𝚖𝚞𝚗-𝙱𝚘𝚜𝚜`},

  onStart: async ({ threadsData, message, event, api, usersData, getLang }) => {
    if (event.logMessageType !== "log:subscribe") return;

    const { threadID } = event;
    const threadData = await threadsData.get(threadID);

    if (!threadData.settings?.sendWelcomeMessage) return;

    const addedMembers = event.logMessageData.addedParticipants;
    const threadName = threadData.threadName;
    const hours = parseInt(getTime("HH"));

    for (const user of addedMembers) {
      const userID = user.userFbId;
      const botID = api.getCurrentUserID();

      // ✅ Bot Added
      if (userID == botID) {
        if (nickNameBot)
          await api.changeNickname(nickNameBot, threadID, botID);

        return message.send("🤖 ধন্যবাদ আমাকে গ্রুপে যুক্ত করার জন্য!");
      }

      const userName = user.fullName;
      const memberCount = event.participantIDs.length;
      const inviterName = await usersData.getName(event.author);

      let welcomeMessage =
        threadData.data?.welcomeMessage ||
        getLang("defaultWelcomeMessage");

      // ⏰ Session detect
      const session =
        hours < 11
          ? getLang("session1")
          : hours < 14
          ? getLang("session2")
          : hours < 18
          ? getLang("session3")
          : getLang("session4");

      welcomeMessage = welcomeMessage
        .replace(/\{userName\}/g, userName)
        .replace(/\{threadName\}/g, threadName)
        .replace(/\{memberCount\}/g, memberCount)
        .replace(/\{inviterName\}/g, inviterName)
        .replace(/\{session\}/g, session)
        .replace(/\{time\}/g, hours);

      const form = {
        body: welcomeMessage,
        mentions: [{ tag: userName, id: userID }]
      };

      // 📎 Attachment Support
      if (threadData.data?.welcomeAttachment) {
        const files = threadData.data.welcomeAttachment;

        const attachments = await Promise.allSettled(
          files.map(file => drive.getFile(file, "stream"))
        );

        form.attachment = attachments
          .filter(res => res.status === "fulfilled")
          .map(res => res.value);
      }

      await message.send(form);
    }
  }`
    }
  },

  onStart: async ({ threadsData, message, event, api, usersData, getLang }) => {
    if (event.logMessageType !== "log:subscribe") return;

    const { threadID } = event;
    const threadData = await threadsData.get(threadID);

    if (!threadData.settings?.sendWelcomeMessage) return;

    const addedMembers = event.logMessageData.addedParticipants;
    const threadName = threadData.threadName;
    const hours = parseInt(getTime("HH"));

    for (const user of addedMembers) {
      const userID = user.userFbId;
      const botID = api.getCurrentUserID();

      // ✅ Bot Added
      if (userID == botID) {
        if (nickNameBot)
          await api.changeNickname(nickNameBot, threadID, botID);

        return message.send("🤖 ধন্যবাদ আমাকে গ্রুপে যুক্ত করার জন্য!");
      }

      const userName = user.fullName;
      const memberCount = event.participantIDs.length;
      const inviterName = await usersData.getName(event.author);

      let welcomeMessage =
        threadData.data?.welcomeMessage ||
        getLang("defaultWelcomeMessage");

      // ⏰ Session detect
      const session =
        hours < 11
          ? getLang("session1")
          : hours < 14
          ? getLang("session2")
          : hours < 18
          ? getLang("session3")
          : getLang("session4");

      welcomeMessage = welcomeMessage
        .replace(/\{userName\}/g, userName)
        .replace(/\{threadName\}/g, threadName)
        .replace(/\{memberCount\}/g, memberCount)
        .replace(/\{inviterName\}/g, inviterName)
        .replace(/\{session\}/g, session)
        .replace(/\{time\}/g, hours);

      const form = {
        body: welcomeMessage,
        mentions: [{ tag: userName, id: userID }]
      };

      // 📎 Attachment Support
      if (threadData.data?.welcomeAttachment) {
        const files = threadData.data.welcomeAttachment;

        const attachments = await Promise.allSettled(
          files.map(file => drive.getFile(file, "stream"))
        );

        form.attachment = attachments
          .filter(res => res.status === "fulfilled")
          .map(res => res.value);
      }

      await message.send(form);
    }
  }
};
