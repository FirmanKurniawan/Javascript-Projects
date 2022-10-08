require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const zodiac = (tanggalLahirParam) => {
  const zodiac = [
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ];

  tanggalLahirParam = tanggalLahirParam.split("-");
  const tanggalLahir = {
    tanggal: Number(tanggalLahirParam[0]),
    bulan: Number(tanggalLahirParam[1]),
    tahun: Number(tanggalLahirParam[2]),
  };

  switch (true) {
    case tanggalLahir.bulan === 1:
      if (tanggalLahir.tanggal < 20) return zodiac[11];
      else return zodiac[0];
    case tanggalLahir.bulan === 2:
      if (tanggalLahir.tanggal < 19) return zodiac[0];
      else return zodiac[1];
    case tanggalLahir.bulan === 3:
      if (tanggalLahir.tanggal < 21) return zodiac[1];
      else return zodiac[2];
    case tanggalLahir.bulan === 4:
      if (tanggalLahir.tanggal < 20) return zodiac[2];
      else return zodiac[3];
    case tanggalLahir.bulan === 5:
      if (tanggalLahir.tanggal < 21) return zodiac[3];
      else return zodiac[4];
    case tanggalLahir.bulan === 6:
      if (tanggalLahir.tanggal < 22) return zodiac[4];
      else return zodiac[5];
    case tanggalLahir.bulan === 7:
      if (tanggalLahir.tanggal < 23) return zodiac[5];
      else return zodiac[6];
    case tanggalLahir.bulan === 8:
      if (tanggalLahir.tanggal < 23) return zodiac[6];
      else return zodiac[7];
    case tanggalLahir.bulan === 9:
      if (tanggalLahir.tanggal < 23) return zodiac[7];
      else return zodiac[8];
    case tanggalLahir.bulan === 10:
      if (tanggalLahir.tanggal < 23) return zodiac[8];
      else return zodiac[9];
    case tanggalLahir.bulan === 11:
      if (tanggalLahir.tanggal < 22) return zodiac[9];
      else return zodiac[10];
    case tanggalLahir.bulan === 12:
      if (tanggalLahir.tanggal < 22) return zodiac[10];
      else return zodiac[11];
    default:
      return `Error, Invalid Format!
Example:
/zodiac 30-12-1999`;
  }
};

bot.onText(/\/zodiac (.+)/, (message, match) => {
  const chatId = message.chat.id;
  const resp = zodiac(match[1]);
  bot.sendMessage(chatId, resp, { reply_to_message_id: message.message_id });
});
