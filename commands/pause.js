export default async function pause(interaction, distube) {
  const queue = distube.getQueue(interaction.member.voice.channel);
  if (!queue) {
    return await interaction.reply("Şu anda çalınan bir şarkı yok.");
  }

  distube.pause(interaction.member.voice.channel);
  await interaction.reply("Şarkı duraklatıldı.");
} 