import { NavLink } from "react-router-dom"
import { useState } from "react";

export default function Home() {

    const [title, setTitle] = useState("Principios de React");
    document.title = title;
    return (
        <section classNameName="overflow-hidden w-screen h-48 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black flex justify-center items-center flex-col sm:flex-row gap-x-9 gap-y-9">
            <div>
                <ul className="flex justify-center gap-8 text-white font-bold text-xl p-10 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black">
                    <li onClick={() => setTitle('Notes App')}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "text-purple-500 font-extrabold" : "")}
                        >
                            Notes App
                        </NavLink>
                    </li>
                    <li onClick={() => setTitle("Business Card")}>
                        <NavLink
                            to="/businessCard"
                            className={({ isActive }) => (isActive ? "text-purple-500 font-extrabold" : "")}
                        >
                            Business Card
                        </NavLink>
                    </li>
                    <li onClick={() => setTitle("Travel Journal")}>
                        <NavLink
                            className={({ isActive }) => (isActive ? "text-purple-500 font-extrabold" : "")}
                            to="/travelJournal"
                        >
                            Travel Journal
                        </NavLink>
                    </li>
                    <li onClick={() => setTitle("Form Example")}>
                        <NavLink
                            className={({ isActive }) => (isActive ? "text-purple-500 font-extrabold" : "")}
                            to="/appForm"
                        >
                            Form App
                        </NavLink>
                    </li>
                </ul>
            </div>
        </section>
    )
}
