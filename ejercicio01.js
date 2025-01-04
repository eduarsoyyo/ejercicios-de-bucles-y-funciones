// Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.

// Imprime este nuevo array por consola.

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
]
const humanCharacters = []

// Usamos un bucle for para recorrer los personajes
for (let i = 0; i < characters.length; i++) {
  // Si la especie del personaje es 'Human', lo agregamos al nuevo array
  if (characters[i].species === 'Human') {
    humanCharacters.push(characters[i])
  }
}

// Imprimimos el array de personajes humanos
console.log(humanCharacters)
