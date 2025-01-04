// Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

// Imprime ambos conteos por consola.

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
]

// Añade tu código de bucle aquí

let before2000 = 0
let after2000 = 0

// Usamos un bucle for para recorrer el array de películas
for (let i = 0; i < movies.length; i++) {
  // Si la película fue lanzada antes del 2000
  if (movies[i].releaseYear < 2000) {
    before2000++
  } else {
    // Si la película fue lanzada después del 2000
    after2000++
  }
}

// Imprimimos los resultados
console.log(`Películas antes del 2000: ${before2000}`)
console.log(`Películas después del 2000: ${after2000}`)
