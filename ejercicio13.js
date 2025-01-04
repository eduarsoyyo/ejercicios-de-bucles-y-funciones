// Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.

// Averigua como hallar el año actual en tus cálculos.

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
]

function calculateActorsAges(actors) {
  const currentYear = new Date().getFullYear() // Obtenemos el año actual
  console.log(currentYear)

  // Creamos un nuevo array donde guardaremos los nombres y edades
  const result = [] // Este array será donde guardaremos la información

  // Recorremos todos los actores
  for (let i = 0; i < actors.length; i++) {
    const actor = actors[i]
    const age = currentYear - actor.born // Calculamos la edad restando el año de nacimiento del año actual

    // Añadimos el nombre y la edad al array 'result'
    result.push({ name: actor.name, age: age })
  }

  // Devolvemos el resultado
  return result
}

// Llamamos a la función y mostramos el resultado
const actorsAges = calculateActorsAges(actors)
console.log(actorsAges)
