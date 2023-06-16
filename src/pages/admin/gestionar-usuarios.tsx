import {DataTable} from "@/components/DataTable";

export default function (){

    const columns = [
        {
            name: 'Id',
            selector: (row) => row.id,
        },
        {
            name: 'Nombre',
            selector: (row) => row.nombre,
        },
        {
            name: 'Apellido',
            selector: (row) => row.apellido,
        },
        {
            name: 'UserName',
            selector: (row) => row.userName,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
        },
        {
            name: 'Password',
            selector: (row) => row.password,
        },
        {
            name: 'Rol',
            selector: (row) => row.rol,
        },
        {
            name: 'Estado',
            selector: (row) => row.estado,
        },
    ];

    const data = [
        {
            id: 1,
            nombre: 'John',
            apellido: 'Doe',
            userName: 'johndoe',
            email: 'johndoe@example.com',
            password: 'password1',
            rol: 'admin',
            estado: 'activo',
        },
        {
            id: 2,
            nombre: 'Jane',
            apellido: 'Smith',
            userName: 'janesmith',
            email: 'janesmith@example.com',
            password: 'password2',
            rol: 'user',
            estado: 'activo',
        },
        {
            id: 3,
            nombre: 'Bob',
            apellido: 'Johnson',
            userName: 'bobjohnson',
            email: 'bobjohnson@example.com',
            password: 'password3',
            rol: 'user',
            estado: 'inactivo',
        },
        {
            id: 4,
            nombre: 'Alice',
            apellido: 'Williams',
            userName: 'alicewilliams',
            email: 'alicewilliams@example.com',
            password: 'password4',
            rol: 'user',
            estado: 'activo',
        },
        {
            id: 5,
            nombre: 'Michael',
            apellido: 'Brown',
            userName: 'michaelbrown',
            email: 'michaelbrown@example.com',
            password: 'password5',
            rol: 'admin',
            estado: 'activo',
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
