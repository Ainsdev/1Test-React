import Note from "./Note";
import React, { useEffect } from "react";

export default function Notes(params) {
    const storage = window.localStorage;
    var notes = JSON.parse(storage.getItem("notes"));
    let data = notes.map(item => <Note title={item.title} text={item.text} date={item.date} />);
    //managing data
    // storage.getItem("notes") ? JSON.parse(storage.getItem("notes")) :
    useEffect(() => {
        storage.setItem("notes", JSON.stringify(params.data));

    }, [notes])
    return (
        <article className="m-1 mt-5 text-black pt-5 sm:w-1/3 flex flex-col">
            <h1 className="text-2xl font-bold">Notes</h1>
            {data.length > 1 ? data : <p className="text-center animate-bounce text-xl">Write your first note!!</p>}
        </article>
    )
}
//boton edit simplemente decorativo, para editar una nota simplemente se pulsa en cualquer lugar de la nota y te permite visualizarla con la opcion de editar.