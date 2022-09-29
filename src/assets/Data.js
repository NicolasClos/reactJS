import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';

const Data = [{
            id : 1,
            nombre : "Iphone X",
            gb : 128,
            stock : 20,
            precio : 600,
            img : img1,
            condicion: 'Nuevo',
            maxCuotas: 3,
            nombreCompleto: 'Apple iPhoneXS 256gb Green',
            cantidadVendidos: 20
        },{
            id : 2,
            nombre : "Iphone 12",
            gb : 128,
            stock : 80,
            precio : 750,
            img : img2,
            condicion: 'Usado',
            maxCuotas: 6,
            nombreCompleto: 'Apple iPhone 12 256gb Black',
            cantidadVendidos: 17
        },{
            id : 3,
            nombre : "Iphone 13 pro",
            gb : 128,
            stock : 50,
            precio : 950,
            img : img3,
            condicion: 'Nuevo',
            maxCuotas: 3,
            nombreCompleto: 'Apple iPhone 13 pro 256gb Silver',
            cantidadVendidos: 14
        },{
            id : 4,
            nombre : "Iphone 14",
            gb : 128,
            stock : 10,
            precio : 1000,
            img : img4,
            condicion: 'Usado',
            maxCuotas: 3,
            nombreCompleto: 'Apple iPhone 14 256gb Red',
            cantidadVendidos: 22
        },{
            id : 5,
            nombre : "Iphone 14 pro",
            gb : 128,
            stock : 30,
            precio : 1100,
            img : img5,
            condicion: 'Nuevo',
            maxCuotas: 9,
            nombreCompleto: 'Apple iPhone 14 pro 256gb Gold',
            cantidadVendidos: 30
        }]

        const getData = ()=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    if(Data){
                        resolve(Data);
                    } else{
                        reject(Data)
                    }
                    resolve(Data)
                }, 2000)
            })
        }

        const getItem = (idItem)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let itemFind = Data.find(item => item.id === parseInt(idItem))
                    if(itemFind){
                        resolve(itemFind)
                    } else{
                        reject(new Error('Item no encontrado!'))
                    }
                },2000)
            });
        }

export default Data;
export {getData, getItem};