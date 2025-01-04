// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

// Utiliza bucles para lograrlo e imprime el objeto final por consola.

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
]

// Añade tu código de bucle aquí
const groupedMovies = {}

// Bucle para agrupar las películas por década
for (let i = 0; i < starWarsMovies.length; i++) {
  const movie = starWarsMovies[i]
  const decade = Math.floor(movie.releaseYear / 10) * 10 // Obtener la década (1977 -> 1970, 1999 -> 1990, etc.)

  // Si la década no existe en el objeto, la creamos
  if (!groupedMovies[decade]) {
    groupedMovies[decade] = []
  }

  // Añadimos la película al array de la década correspondiente
  groupedMovies[decade].push(movie)
}

// Imprimimos el objeto final con las películas agrupadas
console.log(groupedMovies)
