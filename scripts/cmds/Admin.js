// Goat Bot Admin Info File
module.exports = {
  admins: [
    {
      id: "100012345678901", // Facebook User ID of admin
      name: "Md Mamun",
      role: "superadmin",
      permissions: ["ban", "kick", "setPrefix", "broadcast"]
    },
    {
      id: "100098765432109",
      name: "John Doe",
      role: "moderator",
      permissions: ["kick", "warn", "mute"]
    }
  ],
  
  botInfo: {
    name: "Goat Bot",
    prefix: "!",
    version: "1.0.0",
    owner: "Md Mamun"
  },

  settings: {
    welcomeMessage: "Welcome to the chat! 🐐",
    autoRemoveSpam: true,
    logAdminActions: true
  }
};
