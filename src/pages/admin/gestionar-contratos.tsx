import {DataTable} from "@/components/DataTable";

export default function (){
    const columns = [
        {
            name: 'Dependencia',
            selector: (row) => row.dependencia,
        },
        {
            name: 'Serie',
            selector: (row) => row.serie,
        },
        {
            name: 'SubSerie',
            selector: (row) => row.subSerie,
        },
        {
            name: 'Asunto',
            selector: (row) => row.asunto,
        },
        {
            name: 'Fecha Inicial',
            selector: (row) => row.fechaInicial,
        },
        {
            name: 'Fecha Final',
            selector: (row) => row.fechaFinal,
        },
        {
            name: 'Estante',
            selector: (row) => row.estante,
        },
        {
            name: 'Bandeja',
            selector: (row) => row.bandeja,
        },
        {
            name: 'Caja',
            selector: (row) => row.caja,
        },
        {
            name: 'Ordenes',
            selector: (row) => row.ordenes,
        },
        {
            name: 'Fallos',
            selector: (row) => row.fallos,
        },
        {
            name: 'Observaciones',
            selector: (row) => row.observaciones,
        },
    ];

    const data = [
        {
            dependencia: 'Departamento 1',
            serie: 'Serie A',
            subSerie: 'Subserie 1',
            asunto: 'Asunto 1',
            fechaInicial: '2022-01-01',
            fechaFinal: '2022-02-01',
            estante: 'Estante 1',
            bandeja: 'Bandeja 1',
            caja: 'Caja 1',
            ordenes: 'Orden 1',
            fallos: 'Fallos 1',
            observaciones: 'Observaciones 1',
        },
        {
            dependencia: 'Departamento 2',
            serie: 'Serie B',
            subSerie: 'Subserie 2',
            asunto: 'Asunto 2',
            fechaInicial: '2022-02-01',
            fechaFinal: '2022-03-01',
            estante: 'Estante 2',
            bandeja: 'Bandeja 2',
            caja: 'Caja 2',
            ordenes: 'Orden 2',
            fallos: 'Fallos 2',
            observaciones: 'Observaciones 2',
        },
        {
            dependencia: 'Departamento 1',
            serie: 'Serie A',
            subSerie: 'Subserie 3',
            asunto: 'Asunto 3',
            fechaInicial: '2022-03-01',
            fechaFinal: '2022-04-01',
            estante: 'Estante 3',
            bandeja: 'Bandeja 3',
            caja: 'Caja 3',
            ordenes: 'Orden 3',
            fallos: 'Fallos 3',
            observaciones: 'Observaciones 3',
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
