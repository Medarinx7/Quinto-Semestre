
import { Iestudiantes,Iciudades,Icolegios, estudiantes, colegios, ciudades} from './data'

function getEstudianteById(id:number, callback:(err:Error|null, estudiante?:Iestudiantes)=>void){
    const estudiante = estudiantes.find(e=>e.id===id);
    if(!estudiantes){
        const error = new Error('Estudiante no encontrado');
        callback(error);
        
    }
    callback(null,estudiante);
}


function getColegioById(id:number, callback:(err:Error|null, colegio?:Icolegios)=>void){
    const colegio = colegios.find(e=>e.id===id);
    if(!colegio){
        const error = new Error('Estudiante no encontrado');
        callback(error);
        
    }
    callback(null,colegio);
}


function getCiudadById(id:number, callback:(err:Error|null, ciudad?:Iciudades)=>void){
    const ciudad = ciudades.find(e=>e.id===id);
    if(!ciudad){
        const error = new Error('Estudiante no encontrado');
        callback(error);
        
    }
    callback(null,ciudad);
}


export{
    getCiudadById,
    getColegioById,
    getEstudianteById
}