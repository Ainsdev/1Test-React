

export default function Note(params) {
    return (
        <figure className="flex text-start border border-black p-3 gap-2 mt-2 rounded-lg items-start justify-start hover:bg-white hover:cursor-pointer">
            <div className="flex-col flex gap-1 justify-start items-start ml-2">
                <h1 className="text-lg font-bold">{params.title}</h1>
                <p> {params.date} </p>
                <div className="flex  gap-2 justify-items-start items-start p-1">
                    <img className="w-5" src="editar.png" alt="" />
                    <img className="w-5" src="delete.png" alt="" />
                </div>
            </div>
            <p className="overflow-hidden h-24 align-top">{params.text}</p>
        </figure>
    )
}
