/*
 3-
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Jugador 1", "Jugador 2", "Empate" 
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Jugador 2".
 */
/*P gana a R, R gana a S, S gana a P */
const ganador = partida => {
  const puntuacion = {
    0:0,
    1:0,
  }

   for(let par of partida){
   if(par.includes('P') && par.includes('R')){
    puntuacion[par.indexOf('P')]++
   }
   if(par.includes('R') && par.includes('S')){
    puntuacion[par.indexOf('R')]++
   }
   if(par.includes('S') && par.includes('P')){
    puntuacion[par.indexOf('S')]++
   }
  }

  if(puntuacion[0] < puntuacion[1]){
    return 'Jugador 2'
  }
  if(puntuacion[0] > puntuacion[1]){
    return 'Jugador 1'
  }
  return 'Empate'
  }

//  console.log(ganador([["R","S"], ["S","R"], ["P","S"]]))

/*5-
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

const milisegundos = (dia,hora,min,seg) => {
 const diaEnSeg = (dia*24) * 3600
 const horaEnSeg = hora * 3600
 const minEnSeg = min*60

 return (diaEnSeg + horaEnSeg + minEnSeg + seg) * 1000
}


/* 6-Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

const convertirPrimeraLetra = palabra => {
  const letrasMayus = { a: 'A',b: 'B',c: 'C',d: 'D',e: 'E', f: 'F', g: 'G', h: 'H', i: 'I', j: 'J',
    k: 'K', l: 'L', m: 'M', n: 'N', ñ: 'Ñ', o: 'O', p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T', u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y', z: 'Z' };

  const arrPalabra = palabra.split('')
  arrPalabra[0] = letrasMayus[arrPalabra[0]]
  const mayus = arrPalabra.join('')
  return mayus
}



 /*1-
* Enunciado: Dado un array de enteros ordenado y sin repetidos,
* crea una función que calcule y retorne todos los que faltan entre
* el mayor y el menor.
* - Lanza un error si el array de entrada no es correcto.
*/

const numerosFaltantes = (arr) => {
  if(!Array.isArray(arr)){
    return 'Datos incorrectos'
  } else {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const todos = []
    for(let i = min; i<=max; i++) {
      todos.push(i)
    }
    
    const faltantes = todos.filter(el => !arr.includes(el))
    return faltantes
  }  
}



/*4-
* Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
* que calcule el mínimo común múltiplo (mcm) de dos números enteros.
* - No se pueden utilizar operaciones del lenguaje que
* lo resuelvan directamente.
*/

const descomponer = (num) => {
  const primos = [],
        potencia = {};
        
 while (num > 1){
 
  if(num % 2 === 0){
    primos.push(2)
    num /= 2
  }
  if(num % 3 === 0){
    primos.push(3)
    num /= 3
  }
  if(num % 5 === 0){
    primos.push(5)
    num /= 5
  }
  if(num % 7 === 0){
    primos.push(7)
    num /= 7
  }
}
  
  for(let i = 0; i < primos.length; i++){
   const actual = primos[i]
   potencia[actual] === undefined ? potencia[actual] = 1 : potencia[actual]++
  }

  return potencia
} 


const mcd = (num1, num2) => {
  const primos1 = descomponer(num1)
  const primos2 = descomponer(num2)

  let total = 1;
  let comun = 0;
  for (factor in primos1){
    if(Object.hasOwn(primos2, factor)){
      const potencia = primos1[factor] > primos2[factor] ? primos2[factor] : primos1[factor]
      const res = factor ** potencia
      total *= res
      comun += 1
    }
  }
  return comun === 0 ? 1 : total
}

const mcm = (num1,num2) => {
  return (num1*num2) / mcd(num1,num2)
}


 /*2-
* Crea una función que ordene y retorne una matriz de números.
* - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
* adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
* o de mayor a menor.
* - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
* automáticamente.
*/

const ordenarMatriz = (matriz, sentido) => { 
  cambiar = true

  while(cambiar) {
    cambiar = false

    for(let i = 0; i<=matriz.length; i++){
      const actual = matriz[i]
      const temp = matriz[i-1]
      const comp = sentido === 'asc' ? matriz[i-1] > matriz[i] : matriz[i-1] < matriz[i]

      if(comp){
        cambiar = true
        matriz[i] = temp
        matriz[i-1] = actual
      } 
    }
  }
  return matriz
}
// console.log(ordenarMatriz([3,6,2], 'asc'))


/*7-
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const palabrasRepetidas = palabras => {
  
  const total = {}

  for(let  i = 0; i < palabras.length; i++){
   const actual = palabras[i].toLowerCase()
   total[actual] === undefined ? total[actual] = 1 : total[actual]++
  }
return total  
}
