// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

// Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  let result = '' // Aquí vamos a guardar el mensaje final
  let found = false // Para saber si encontramos al menos un mutante con ese poder

  // Recorremos el array de mutantes
  for (let i = 0; i < mutants.length; i++) {
    if (mutants[i].power === power) {
      // Si encontramos un mutante con el poder, lo añadimos al mensaje
      result += mutants[i].name + ', '
      found = true // Marcamos que encontramos un mutante
    }
  }

  // Si encontramos al menos un mutante, retornamos el mensaje
  if (found) {
    return "Mutantes con el poder '" + power + "': " + result.slice(0, -2) + '.' // Eliminamos la última coma
  } else {
    // Si no encontramos ningún mutante con ese poder
    return "No se encontró ningún mutante con el poder '" + power + "'."
  }
}

// Ejemplo de uso
console.log(findMutantByPower(mutants, 'telepathy'))
console.log(findMutantByPower(mutants, 'invisibility'))
