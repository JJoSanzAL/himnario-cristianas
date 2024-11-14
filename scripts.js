function filterSongs() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let songList = document.getElementById('song-list');
    let songs = songList.getElementsByTagName('li');

    for (let i = 0; i < songs.length; i++) {
        let song = songs[i].textContent.toLowerCase();
        if (song.includes(input)) {
            songs[i].style.display = "";
        } else {
            songs[i].style.display = "none";
        }
    }
}
