// Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

// Utiliza este array para probar tu función.

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

function findOldestXMen(xMen) {
  let oldestYear = xMen[0].year // Inicializamos con el año del primer miembro
  let oldestMembers = [] // Aquí guardaremos los miembros más antiguos

  // Encuentra el año más antiguo
  for (let i = 1; i < xMen.length; i++) {
    if (xMen[i].year < oldestYear) {
      oldestYear = xMen[i].year // Actualizamos el año más antiguo
    }
  }

  // Buscamos todos los miembros que coinciden con el año más antiguo
  for (let i = 0; i < xMen.length; i++) {
    if (xMen[i].year === oldestYear) {
      oldestMembers.push(xMen[i]) // Añadimos al array los miembros más antiguos
    }
  }

  return oldestMembers
}

// Llama a la función y muestra el resultado
const oldestXMen = findOldestXMen(xMen)
console.log('The oldest X-Men members are:')
oldestXMen.forEach((member) => {
  console.log(`${member.name}, who appeared in ${member.year}`)
})
