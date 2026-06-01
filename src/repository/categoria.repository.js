import { Prisma } from "../prisma.js"

export const crearCategoria=(categoriaData)=>{
    return Prisma.categoria.create({data:categoriaData})  

}
export const leerCategoria=()=>{
    return Prisma.categoria.findMany()
}
export const actualizarCategoria=(categoriaId, categoriaData)=>{
    return Prisma.categoria.update({
        where: { id: categoriaId },
        data: categoriaData
    })
}
export const eliminarCategoria=(categoriaId)=>{
    return Prisma.categoria.delete({
        where: { id: categoriaId }
    })
}
