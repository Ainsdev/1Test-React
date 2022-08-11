import Note from "./Note";

export default function Notes(params) {
    return (
        <article className="m-1 mt-5 text-black pt-5 sm:w-1/3">
            <Note 
            title="Note 1"
            date="2020/01/01"
                text="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
            />
        </article>
    )
}
//boton edit simplemente decorativo, para editar una nota simplemente se pulsa en cualquer lugar de la nota y te permite visualizarla con la opcion de editar.