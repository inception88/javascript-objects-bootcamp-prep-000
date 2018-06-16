var playlist = {ChildishGambino: Sober};

function updatePlaylist(playlist,artist,song) {
  Object.assign(playlist,artist,song)
  return playlist
}