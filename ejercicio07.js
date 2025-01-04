// Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

// Utiliza bucles para estructurar este objeto e imprime el resultado por consola.

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]

// Añade tu código de bucle aquí
const groupedTracks = {}

// Bucle para clasificar las canciones por género
for (let i = 0; i < tracks.length; i++) {
  const track = tracks[i]
  const genre = track.genre

  // Si el género no existe en el objeto, lo inicializamos como un array vacío
  if (!groupedTracks[genre]) {
    groupedTracks[genre] = []
  }

  // Añadimos la canción al array correspondiente al género
  groupedTracks[genre].push(track)
}

// Imprimimos el objeto clasificado
console.log(groupedTracks)
