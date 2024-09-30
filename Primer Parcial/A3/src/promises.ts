import{Iciudades,Iestudiantes,Icolegios,estudiantes,colegios,ciudades } from './data'

function getEstudianteByIdUsingPromises(id:number):Promise<Iestudiantes>{
    return new Promise((resolve,reject)=>{
        const estudiante= estudiantes.find(e=>e.id===id);
        if (!estudiante)
        {
            const error = new Error ('Estudiante no encontrado');
            reject(error);
        }
        resolve(estudiante!);
    })
}

function getColegioByIdUsingPromises(id:number):Promise<Icolegios>{
    return new Promise((resolve,reject)=>{
        const colegio= colegios.find(e=>e.id===id);
        if (!colegio)
        {
            const error = new Error ('colegio no encontrado');
            reject(error);
        }
        resolve(colegio!);
    })
}

function getCiudadByIdUsingPromises(id:number):Promise<Iciudades>{
    return new Promise((resolve,reject)=>{
        const ciudad= ciudades.find(e=>e.id===id);
        if (!ciudad)
        {
            const error = new Error ('ciudad no encontrado');
            reject(error);
        }
        resolve(ciudad!);
    })
}

export {
    getEstudianteByIdUsingPromises,
    getColegioByIdUsingPromises,
    getCiudadByIdUsingPromises
}