document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('input', function() {
        let filter = this.value.toLowerCase();
        let songs = document.querySelectorAll('.song');
    
        songs.forEach(function(song) {
            let title = song.querySelector('h2').textContent.toLowerCase();
            let verses = song.querySelectorAll('.verse, .chorus');
            let match = false;
            
            // Verificar si el título de la canción coincide con el filtro
            if (title.indexOf(filter) > -1) {
                match = true;
            } else {
                // Verificar si cualquier verso o coro coincide con el filtro
                verses.forEach(function(verse) {
                    if (verse.textContent.toLowerCase().indexOf(filter) > -1) {
                        match = true;
                    }
                });
            }
            
            // Mostrar u ocultar la canción según si coincide con el filtro
            if (match) {
                song.style.display = '';
            } else {
                song.style.display = 'none';
            }
        });
    });
});
