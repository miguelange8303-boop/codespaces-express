import { Prisma } from "../prisma.js"

export const crearResponsable=(responsableData)=>{
    return Prisma.responsable.create({data:responsableData})  

}
export const leerResponsable=()=>{
    return Prisma.responsable.findMany()
}
export const actualizarResponsable=(responsableId, responsableData)=>{
    return Prisma.responsable.update({
        where: { id: responsableId },
        data: responsableData
    })
}
export const eliminarResponsable=(responsableId)=>{
    return Prisma.responsable.delete({
        where: { id: responsableId }
    })
}