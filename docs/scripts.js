const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  
  const performSearch = debounce(function() {
    let filter = this.value.toLowerCase().trim();
    let songs = document.querySelectorAll('.song');

    songs.forEach(function (song) {
      let titleElement = song.querySelector('.song-title');
      let titleText = titleElement ? titleElement.textContent.toLowerCase() : '';
      let verses = Array.from(song.querySelectorAll('.verse, .chorus')).map(v => v.textContent.toLowerCase()).join(' ');
      let songText = titleText + " " + verses;

      if (songText.includes(filter)) {
        song.style.display = '';
      } else {
        song.style.display = 'none';
      }
    });
  }, 300); // 300ms de retraso

  searchInput.addEventListener('input', performSearch);
});