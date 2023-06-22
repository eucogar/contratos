import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Login } from "../models/Login";

export default function LoginForm() {
    const { register, handleSubmit } = useForm<Login>();
    const onSubmit: SubmitHandler<Login> = (data) => {
        console.dir(data); // Muestra los datos del formulario en la consola
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="max-w-md bg-white rounded-lg shadow-md p-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Correo Electrónico
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Correo Electrónico"
                        {...register("email")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Contraseña
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        {...register("password")}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
}
