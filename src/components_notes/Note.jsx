// import { useState } from "react";

export default function Note(params) {
    return (
        <figure key={params.key} className=" flex text-start border border-black p-3 gap-3 mt-2 rounded-lg items-start justify-start bg-yellow-400 hover:bg-yellow-300 hover:cursor-pointer">
            <div className="flex-col flex gap-1 justify-start items-start ml-2">
                <h1 className="text-lg font-bold">{params.title}</h1>
                <p> {params.date} </p>
                <p className="text-[10px]"> {params.hour} </p>
                <div className="flex  gap-2 justify-items-center items-center p-1">
                    <img onClick={(event) => params.deleteNote(event,params.myKey)} className="w-5" src="delete.png" alt="" />
                </div>
            </div>
            <p className="hover:overflow-y-scroll overflow-y-hidden h-36">{params.text}</p>
        </figure>
    )
}