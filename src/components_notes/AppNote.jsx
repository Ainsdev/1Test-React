import AddNote from "./AddNote";
import Notes from "./Notes";
import Note from "./Note";
import React, { useState } from "react";
const storage = window.localStorage;
export default function AppNotes() {
    const [notes, setNotes] = useState(JSON.parse(storage.getItem("notes")) || [{ title: "Project Created by: Guilad", text: "", date: "2022/03/08",hour:"NO" }]);
    storage.setItem("notes", JSON.stringify(notes));
    //Delete Notes
    const deleteNote = (event, id) => {
        event.stopPropagation();
        id == 0 ? alert("You can't delete the creator") : setNotes(notes => notes.filter(note => note.hour !== notes[id].hour));
     
    }
    const data = notes.map((item, index) => <Note key={index} myKey={index} title={item.title} text={item.text} date={item.date} hour={item.hour} deleteNote={deleteNote} />)
    return (
        <main className=" relative flex flex-col">
            <header className="w-screen p-5 font-semibold text-xl">
                <h1 className='text-2xl text-center font-bold'>NOTES APP (responsive)</h1>
                <p className="text-center text-sm text-blue-300">Recharge the page,data will be saved</p>
            </header>
            <section className="flex flex-col sm:flex-row sm:gap-10 sm:px-10 h-screen pt-2">
                <AddNote
                    addNote={setNotes}
                />
                <Notes
                    data={data}
                    deleteNote={setNotes}
                />
            </section>
        </main>
    )
}
