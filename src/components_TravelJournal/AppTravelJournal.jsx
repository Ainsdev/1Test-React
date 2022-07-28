import React from "react";
import Header from "./Header";
import Items from "./Item";

export default function TravelJournal() {
    return (
        <main className="flex flex-col justify-center items-center ">
            <Header />
            <div className="w-screen h-12"></div>
            <Items
                img="https://source.unsplash.com/WLxQvbMyfas"
                name="sssss"
            />
        </main>
    )
}
