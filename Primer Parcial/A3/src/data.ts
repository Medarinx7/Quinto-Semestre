interface Iestudiantes{
    id: number; 
    nombre: string;
    edad: number;
    colegioId: number; 
}
interface Icolegios{
    id: number;
    nombre: string;
    ciudadId: number;
}

interface Iciudades{
    id: number; 
    nombre: string;
}
const estudiantes:Iestudiantes[] = [
    {
        id : 1,
        nombre: 'Marcos',
        edad: 20,
        colegioId: 1

    }
]

const colegios: Icolegios[] = [
    {
        id:1,
        nombre: 'xyz',
        ciudadId: 1
    }
]
const ciudades: Iciudades[] = [
    {
        id: 1,
        nombre: 'xvc'
    }
]

export{
    Iciudades,
    Iestudiantes,
    Icolegios,
    estudiantes,
    colegios,
    ciudades
}