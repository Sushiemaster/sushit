module.exports = (guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was banned!`);
};