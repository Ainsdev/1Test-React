

export default function Note(params) {
    return (
        <figure className="flex text-center border border-black p-3 gap-2 mt-2 rounded-lg items-center justify-center hover:bg-white hover:cursor-pointer">
            <div className="flex-col flex gap-1 justify-center items-start ml-2">
                <h1 className="text-lg font-bold">{params.title}</h1>
                <p> {params.date} </p>
                <div className="flex  gap-2 justify-center items-center p-1">
                    <img className="w-5" src="editar.png" alt="" />
                    <img className="w-5" src="delete.png" alt="" />
                </div>
            </div>
            <p className="overflow-hidden h-24 align-top">{params.text}</p>
        </figure>
    )
}
