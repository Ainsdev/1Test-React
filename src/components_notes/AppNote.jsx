import AddNote from "./AddNote";
import Notes from "./Notes";


export default function AppNotes(params) {
    return (
        <main className="bg-blue-300">
            <header className="w-screen p-5 font-semibold text-xl">
                <h1 className='text-2xl text-center'>NOTES APP Responsive</h1>
            </header>
            <section className="flex flex-col sm:flex-row sm:gap-10 sm:px-10 h-screen border-black border-t-2 pt-10">
                <AddNote />
                <Notes />
            </section>
        </main>
    )
}
