class Card{
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            if (this.stat == "resiliencia"){
                target.res += this.magnitude;
            } else if(this.stat == "poder"){
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

// Tarjetas de Unidad
const NinjaCinturonRojo = new Unit("Ninja Cinturón Rojo", 3, 3, 4);
const NinjaCinturonNegro = new Unit("Ninja Cinturón Negro", 4, 5, 4);

// Cartas de Efectos
const AlgoritmoDuro = new Effect("Algoritmo Difícil", 2, "aumentar la resistencia del objetivo en 3", "resiliencia", +3);
const RechazoPromesaNoManejado = new Effect("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2", "resiliencia", -2);
const ProgramacionPareja = new Effect("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "poder", +2);

// Juego

// Turno 1
console.log("Turno 1");
console.log("El jugador 1 convoca a:")
console.log(NinjaCinturonRojo);
console.log("El jugador 1 juega Algoritmo duro en Ninja Cinturón Rojo");
AlgoritmoDuro.play(NinjaCinturonRojo);
console.log(NinjaCinturonRojo);
console.log("---------------------------------")

// Turno 2
console.log("Turno 2");
console.log("El jugador 2 convoca a Ninja Cinturón Negro");
console.log(NinjaCinturonNegro);
console.log("El jugador 2 juega Rechazo de promesa no manejado en Ninja Cinturón Rojo");
RechazoPromesaNoManejado.play(NinjaCinturonRojo);
console.log(NinjaCinturonRojo);
console.log("---------------------------------")

// Turno 3
console.log("Turno 3");
console.log("El jugador 1 juega Programación en pareja en Ninja Cinturón Rojo");
ProgramacionPareja.play(NinjaCinturonRojo);
console.log(NinjaCinturonRojo);
console.log("El jugador 1 ataca a Ninja Cinturón Negro con Ninja Cinturón Rojo");
NinjaCinturonRojo.attack(NinjaCinturonNegro);
console.log(NinjaCinturonNegro);