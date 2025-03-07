export default async function resume(interaction, distube) {
  const queue = distube.getQueue(interaction.member.voice.channel);
  if (!queue) {
    return await interaction.reply("Şu anda çalınan bir şarkı yok.");
  }

  distube.resume(interaction.member.voice.channel);
  await interaction.reply("Şarkı devam ettirildi.");
} 