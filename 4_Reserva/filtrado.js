class Busqueda{
    constructor(){
        this.personas = [
            {criterio: "Hoteles", precio: 200},
            {criterio: "Cabañas para Grupos", precio: 250},
            {criterio: "Vista a la Playa", precio: +15 },
            {criterio: "Vista a la Piscina", precio: +10 },
            {criterio: "Gimnasio", precio: +10 },
            {criterio: "Piscina", precio: +10 },
            {criterio: "Jacuzzi", precio: +10 },
            {criterio: "Spa", precio: +10 },
            {criterio: "Zonas humedas", precio: +10 },
            {criterio: "Se admiten Mascotas", precio: +15 }

        ];
        this.personasBK = this.personas;
        this.onInit();
        console.log(this.personas);
    }
    onInit(){
        let cuerpo = document.getElementById("cuerpo");
        while(cuerpo.rows.length > 0){
            cuerpo.deleteRow(0);
        }
        this.personas.forEach(persona => {
            let fila = cuerpo.insertRow(cuerpo.rows.length);
            fila.insertCell(0).innerHTML = persona.criterio;
            fila.insertCell(1).innerHTML = persona.precio;

        });
    }
    buscar(id){
        let busqueda = document.getElementById(id).value;
        this.personas = this.personasBK;
        this.personas = this.personas.filter(persona => {return persona.criterio.toLowerCase().indexOf(busqueda) > -1;
        });
        this.onInit();
    }
        
}
let busqueda = new Busqueda();
let form = document.getElementById("busquedaForm");
form.addEventListener('submit', () => {
    busqueda.buscar('valor');
    
}); 