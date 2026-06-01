import { Prisma } from "../prisma.js"

export const crearImplemento=(implementoData)=>{
    return Prisma.implemento.create({data:implementoData})  

}
export const leerImplemento=()=>{
    return Prisma.implemento.findMany()
}
export const actualizarImplemento=(implementoId, implementoData)=>{
    return Prisma.implemento.update({
        where: { id: implementoId },
        data: implementoData
    })
}
export const eliminarImplemento=(implementoId)=>{
    return Prisma.implemento.delete({
        where: { id: implementoId }
    })
}