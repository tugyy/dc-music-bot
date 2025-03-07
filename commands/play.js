export default async function play(interaction, distube, voiceChannel) {
  const url = interaction.options.getString("name-or-url");

  await interaction.deferReply();

  const songAdded = new Promise((resolve) => {
    const handler = (queue, song) => {
      if (!song.requestedBy || song.requestedBy.id === interaction.user.id) {
        distube.off("addSong", handler);
        resolve({ queue, song });
      }
    };
    distube.on("addSong", handler);
  });

  try {
    await distube.play(voiceChannel, url, {
      member: interaction.member,
      textChannel: interaction.channel,
    });

    const { queue, song } = await songAdded;
    if (queue.songs.length > 1) {
      await interaction.editReply(
        `Şarkı sıraya eklendi: **${song.name}** - ${song.formattedDuration}`
      );
    } else {
      await interaction.editReply(
        `Şu anda çalınıyor: **${song.name}** - ${song.formattedDuration}`
      );
    }
  } catch (error) {
    console.error(error);
    await interaction.editReply("❌ Bu video mevcut değil veya erişilemiyor.");
  }
}
