// Filtra una lista de canciones para crear una playlist que solo contenga canciones de rock que duren más de 5 minutos.

// Utiliza un bucle para lograrlo e imprime la nueva playlist por consola.

const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
  { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
  { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
  { title: 'Crazy Love', genre: 'Pop', duration: 3.52 }
]

// Añade tu código de bucle aquí

const rockPlaylist = []

// Usamos un bucle for para recorrer la lista de canciones
for (let i = 0; i < songs.length; i++) {
  // Comprobamos si el género es 'Rock' y la duración es mayor a 5 minutos
  if (songs[i].genre === 'Rock' && songs[i].duration > 5) {
    // Añadimos la canción a la playlist
    rockPlaylist.push(songs[i])
  }
}

// Imprimimos la nueva playlist
console.log(rockPlaylist)
