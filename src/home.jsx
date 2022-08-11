import { NavLink } from "react-router-dom"

export default function Home() {

    return (
        <section classNameName="overflow-hidden w-screen h-48 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black flex justify-center items-center flex-col sm:flex-row gap-x-9 gap-y-9">
            <div>
                <ul className="flex justify-center gap-8 text-white font-bold text-xl p-10 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "text-purple-500 font-extrabold" : "")}
                        >
                            Notes App
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/businessCard"
                            className={({ isActive }) => (isActive ? "text-purple-500 font-extrabold" : "")}
                        >
                            Business Card
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "text-purple-500 font-extrabold" : "")}
                            to="/travelJournal"
                        >
                            Travel Journal
                        </NavLink>
                    </li>
                    <li>
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
