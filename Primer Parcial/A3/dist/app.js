"use strict";
// // import  { getEstudianteById, getColegioById, getCiudadById} from './callback'
// // getEstudianteById(1, (err,estudiante)=>{
// //     if(err)
// //     {
// //         console.log(err);
// //         return;
// //     }
// //     console.log(estudiante);
// //     getColegioById(estudiante!.colegioId,(err,colegio)=>{
// //         if(err)
// //         {
// //             console.log(err);
// //             return;
// //         }
// //         console.log(colegio);
// //         getCiudadById(colegio!.id,(err,ciudad)=>{
// //             if(err)
// //             {
// //                 console.log(err);
// //                 return;
// //             }
// //             console.log(ciudad);
// //         })
// //     })
// // })
// // import{Icolegios, Iestudiantes, Iciudades} from './data'
// // import{getColegioByIdUsingPromises, getEstudianteByIdUsingPromises, getCiudadByIdUsingPromises} from './promises'
// // getEstudianteByIdUsingPromises(1)
// // .then((estudiantes:Iestudiantes)=>{return getColegioByIdUsingPromises(estudiantes.colegioId)})
// // .then((colegios:Icolegios)=>{return getCiudadByIdUsingPromises(colegios.ciudadId) })
// // .then((ciudad:Iciudades)=>{console.log(ciudad)})
// // .catch(error=>console.log(error))
// import { getEstudianteByIdaa,getColegioByIdaa } from './asyncAwait'
// // async function main(){
// //     const estudiante = await getEstudianteByIdaa(1)
// //     const colegio = await getColegioByIdaa(estudiante.colegioId);
// //     console.log(estudiante, colegio);
// // }
// // main()
// (async()=>{
//     try {
//         const estudiante = await getEstudianteByIdaa(1);
//         const colegio = await getColegioByIdaa(estudiante.colegioId);
//         console.log(estudiante, colegio);
//     } catch (error) {
//         console.log(error);
//     }
// })()
