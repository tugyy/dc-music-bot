export default async function stop(interaction, distube, voiceChannel) {
  if (!voiceChannel) {
    return await interaction.reply("Lütfen önce bir ses kanalına katılın!");
  }
  distube.stop(voiceChannel);
  await interaction.reply("Şarkı durduruldu!");
} 