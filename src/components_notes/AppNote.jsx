import AddNote from "./AddNote";
import Notes from "./Notes";
import Note from "./Note";
import React, { useState, useEffect } from "react";

export default function AppNotes() {
    const [notes, setNotes] = useState([{ title: "Project Created by: Guilad", text: "", date: "2022/03/08" }]);
    const storage = window.localStorage;
    const checkStorage = () => {
        if (storage.getItem("notes")) {
            setNotes(JSON.parse(storage.getItem("notes")));
        }
    }
    useEffect(() => {
        checkStorage();
        storage.setItem("notes", JSON.stringify(notes));
        console.log("CHECK")
        console.log(storage.getItem("notes"))
     }, []);

    return (
        <main className="bg-blue-300">
            <header className="w-screen p-5 font-semibold text-xl">
                <h1 className='text-2xl text-center'>NOTES APP Responsive</h1>
            </header>
            <section className="flex flex-col sm:flex-row sm:gap-10 sm:px-10 h-screen border-black border-t-2 pt-10">
                <AddNote
                    addNote={setNotes}
                />
                <Notes
                    data={notes.map((item, index) => <Note key={index} title={item.title} text={item.text} date={item.date} />)}
                />
            </section>
        </main>
    )
}
