import Note from "./Note";
import React, { useEffect } from "react";

export default function Notes(params) {
    let data = params.data;
    const click = () => {
        params.deleteNote(prev => [{ title: "Project Created by: Guilad", text: "", date: "Time Zero"}]);
    }
    return (
        <article className="m-1 mt-5 text-black pt-5 sm:w-1/3 flex flex-col">
            <div className="flex gap-4 justify-start items-start">
                <h1 className="text-2xl font-bold">Notes</h1>
                {data.length > 1 && <button className="rounded-xl w-1/4 text-center px-3 py-1 bg-red-500 text-white sm:hover:ring-2 sm:hover:ring-white" onClick={click}>Delete all</button>}
            </div>
            {data.length > 1 ? data : <p className="text-center animate-bounce text-xl">Write your first note!!</p>}
        </article>
    )
}
//boton edit simplemente decorativo, para editar una nota simplemente se pulsa en cualquer lugar de la nota y te permite visualizarla con la opcion de editar.
