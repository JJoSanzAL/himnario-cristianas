document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search').addEventListener('input', function () {
    let filter = this.value.toLowerCase().trim();
    let songs = document.querySelectorAll('.song');

    songs.forEach(function (song) {
      let titleElement = song.querySelector('.song-title');
      let titleText = titleElement ? titleElement.textContent.toLowerCase() : '';
      let verses = song.querySelectorAll('.verse, .chorus');
      let songText = titleText;

      verses.forEach(function(verse) {
        songText += " " + verse.textContent.toLowerCase();
      });

      if (songText.includes(filter)) {
        song.style.display = '';
      } else {
        song.style.display = 'none';
      }
    });
  });
});