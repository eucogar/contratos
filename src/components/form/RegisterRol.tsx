import React from 'react';
import {RRol} from "@/models/RRol";

const RegisterRol = () => {

    const { register, handleSubmit } = useForm<RRol>();
    const onSubmit: SubmitHandler<RRol> = (data) => {
        console.dir(data); // Muestra los datos del formulario en la consola
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Nombre">

                        Nombre
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Nombre"
                        type="text"
                        placeholder="Nombre"
                        {...register("Name")}
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Estado"
                    >
                        Estado
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Estado"
                        type="text"
                        placeholder="Estado"
                        {...register("Estate")}
                    />
                </div>

                <div className="mb-8">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Descripcion"
                    >
                        Descripción
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="Descripción"
                        rows="4"
                        placeholder="Descripción"
                        {...register("Description")}
                        ></textarea>
                </div>
                
                <div className="flex justify-end mx-20">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
};

export default RegisterRol;