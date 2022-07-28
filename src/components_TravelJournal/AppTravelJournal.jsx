import React from "react";
import Header from "./Header";
import Items from "./Item";
import data from "./simulateddata";

export default function TravelJournal() {
    const items = data.map(item => {
        return (
            <Items
                img={item.imageUrl}
                name={item.title}
                location={item.location}
                link={item.googleMapsUrl}
                description={item.description}
                date={item.startDate + " - " + item.endDate}
            />
        )
    })
    return (
        <main className="flex flex-col justify-center items-center ">
            <Header />
            <div className="w-screen h-12"></div>
            {items}
        </main>
    )
}
