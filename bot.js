import { Client, Events, GatewayIntentBits } from "discord.js";
import { DisTube } from "distube";
import { YtDlpPlugin } from "@distube/yt-dlp";
import ping from "./commands/ping.js";
import play from "./commands/play.js";
import skip from "./commands/skip.js";
import stop from "./commands/stop.js";
import pause from "./commands/pause.js";
import resume from "./commands/resume.js";
import queue from "./commands/queue.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const distube = new DisTube(client, {
  plugins: [new YtDlpPlugin()],
  emitNewSongOnly: true,
});

distube.setMaxListeners(10);

client.on(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const voiceChannel = interaction.member.voice.channel;
  if (!voiceChannel) {
    return await interaction.reply("Lütfen önce bir ses kanalına katılın!");
  }

  try {
    if (interaction.commandName === "ping") {
      await ping(interaction);
    }

    if (interaction.commandName === "play") {
      await play(interaction, distube, voiceChannel);
    }

    if (interaction.commandName === "skip") {
      await skip(interaction, distube, voiceChannel);
    }

    if (interaction.commandName === "stop") {
      await stop(interaction, distube, voiceChannel);
    }

    if (interaction.commandName === "pause") {
      await pause(interaction, distube);
    }

    if (interaction.commandName === "resume") {
      await resume(interaction, distube);
    }

    if (interaction.commandName === "queue") {
      await queue(interaction, distube);
    }
  } catch (error) {
    console.error(error);
    await interaction.reply("Bir hata oluştu! Lütfen tekrar deneyin.");
  }
});

client.login(process.env.DISCORD_TOKEN);
