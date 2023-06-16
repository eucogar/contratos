import { DataTable } from "@/components/DataTable";

export default function (){
    
    const columns = [
        {
            name: 'ID',
            selector: (row) => row.ID,
        },
        {
            name : 'Nombre',
            selector: (row) => row.Nombre,
        },
        {
            name: 'Descripción',
            selector: (row) => row.Descripcion,
        },
        {
            name: 'Estado',
            selector: (row) => row.Estado,
        },
        {
            name: 'Acciones',
            selector: (row) => row.Acciones,
        },
    ];

    const data = [
        {
            ID: '1',
            Nombre : 'Administrador',
            Descripcion: 'Administrar sistema',
            Estado: 'Activo',
            Acciones: 'Modificar, Eliminar',
        },
        {
            ID: '2',
            Nombre : 'Digitador',
            Descripcion: 'Digitar',
            Estado: 'Activo',
            Acciones: 'Modificar, Eliminar',
        },
        {
            ID: '3',
            Nombre : 'Supervisor',
            Descripcion: 'supervisar',
            Estado: 'Activo',
            Acciones: 'Modificar, Eliminar',
        },
        // Agrega más registros aquí

    ];

    return(
        <div className="flex justify-center vh-100">
            <div>
                <DataTable
                    columns={columns}
                    data={data}
                    selectRow={true}
                    handleSelectRow={(e)=>console.log(e)} />
            </div>
        </div>
    )


        
}
