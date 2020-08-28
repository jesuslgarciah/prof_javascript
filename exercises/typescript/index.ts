//Boolean 
let muted: boolean = true
console.log(muted)
muted = false
console.log(muted)

//Number
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador
console.log(resultado)

//String 
let nombre: string = 'Jesus'
let saludo = `Me llamo ${nombre}`
console.log(saludo)

//Array
let people: string[] = []
people = ["Isabel", "Nicole", "Raul"]
//people.push("9000")

let peopleAndNumber: Array< string | number > = []
peopleAndNumber.push('Ricardo')
peopleAndNumber.push(9000)

//Enum 
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo"
}

let colorFavorito: Color = Color.Rojo
console.log(`Mi color favorito es: ${colorFavorito}`)

//Any sirve para que acepte cualquier valor en la variable
let comodin: any = 'Joker';
comodin = { type: 'Wilcard'}

//Object
let someObject: object = { type: 'Wilcard'}

//FUNCIONES
function add (a: number, b: number): number{
    return a + b
}

let sum = add(3, 5)
console.log(sum)

//funcion que retorna otra funcion 

function createAdder(a: number): (number) => number{
    return function(b: number){
        return a + b
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(12)
console.log(fourPlus6)

//funciones con parametros iniciales o 

function fullName(firstName: string, lastName: string = "Garcia"): string{
    return `${firstName} ${lastName}`
}

const jesusFake = fullName("Jesus", "Perez")
const jesus = fullName("Jesus")

console.log(jesusFake)
console.log(jesus)

//Interfaces permiten crear objetos tipados, que necesariamente tienen lo 
//lo que se especifica
interface Rectangulo {
    ancho: number
    alto: number
    color?: Color //parametro opcional
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Amarillo
}

function area(r: Rectangulo){
    return r.alto * r.ancho
}

const areaRectangulo = area(rect)
console.log(areaRectangulo)

rect.toString = function(){
    return this.color ? `Un rectangulo de color ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())