import {Iciudades, Icolegios, Iestudiantes, colegios, estudiantes, ciudades} from './data'

async function getEstudianteByIdaa(id:number)
{
    const estudiante = estudiantes.find(e=>e.id===id);
    if(!estudiante)
    {
        const error = new Error();
        error.message='no encontramos el estudiante';
        throw error;
    }
    return estudiante
}

async function getColegioByIdaa(id:number)
{
    const colegio = colegios.find(e=>e.id===id);
    if(!colegio)
    {
        throw new Error('no encontramos el colegio');
    }
    return colegio;
}

export{
    getColegioByIdaa,
    getEstudianteByIdaa
}