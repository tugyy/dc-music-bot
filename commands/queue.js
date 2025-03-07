import pkg from "discord.js";
const { EmbedBuilder } = pkg;

export default async function queue(interaction, distube) {
  const queue = distube.getQueue(interaction.guild.id);
  if (!queue) {
    return await interaction.reply("Şu anda çalınan bir şarkı yok.");
  }

  const songList = queue.songs.map((song, index) => {
    return `${index + 1}. **${song.name}** - ${song.formattedDuration}`;
  }).join("\n");

  const embed = new EmbedBuilder()
    .setTitle("Şarkı Sırası")
    .setDescription(songList)
    .setColor("#0099ff");

  await interaction.reply({ embeds: [embed] });
} 