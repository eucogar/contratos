import {DataTable} from "@/components/DataTable";

export default function (){
    const columns = [
        {
            name: 'Duration',
            selector: row => row.duration
        },
        {
            name: 'Client',
            selector: row => row.Client
        },
        {
            name: 'Date',
            selector: row => row.date
        },
        {
            name: 'Observations',
            selector: row => row.observation
        },
    ]

    const data = [
        {
            duration: 100,
            Client:"eulices",
            date:"fecha",
            observation:"Ninguna"
        },
        {
            duration: 100,
            Client:"eulices",
            date:"fecha",
            observation:"Ninguna"
        },
        {
            duration: 100,
            Client:"eulices",
            date:"fecha",
            observation:"Ninguna"
        }
    ]

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
