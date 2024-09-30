
interface INota {
    materia: string;
    nota:number;
}

interface IDireccion{
    calle: string;
    numero: number;
}

interface IDestudiante{
    nombre: string;
    edad: number;
}


const estudiantes = [
    {
        nombre: 'Juan',
        edad: 20,
        direcciones: [
            {
                calle: 'calle1',
                numero: 1
            },
            {
                calle: 'calle2',
                numero: 2
            }
        ]
    }
]
