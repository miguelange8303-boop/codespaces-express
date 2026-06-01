import { Prisma } from "../prisma.js"

export const crearProveedor=(proveedorData)=>{
    return Prisma.proveedor.create({data:proveedorData})  

}
export const leerProveedor=()=>{
    return Prisma.proveedor.findMany()
}
export const actualizarProveedor=(proveedorId, proveedorData)=>{
    return Prisma.proveedor.update({
        where: { id: proveedorId },
        data: proveedorData
    })
}
export const eliminarProveedor=(proveedorId)=>{
    return Prisma.proveedor.delete({
        where: { id: proveedorId }
    })
}