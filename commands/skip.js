export default async function skip(interaction, distube, voiceChannel) {
  if (!voiceChannel) {
    return await interaction.reply("Lütfen önce bir ses kanalına katılın!");
  }
  distube.skip(voiceChannel);
  await interaction.reply("Şarkı atlandı!");
} 