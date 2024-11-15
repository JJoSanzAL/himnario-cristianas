document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let songs = document.querySelectorAll('.song');

    songs.forEach(function(song) {
        let title = song.querySelector('h2').textContent.toLowerCase();
        if (title.indexOf(filter) > -1) {
            song.style.display = '';
        } else {
            song.style.display = 'none';
        }
    });
});
