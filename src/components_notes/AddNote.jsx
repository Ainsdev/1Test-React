import { useForm } from "react-hook-form";

export default function AddNote(params) {
    const { register,handleSubmit } = useForm();
    const onSubmit = (data) => alert(data.title);
    return (
        <article className="sm:w-2/3 sm:text-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center p-2 gap-3">
                <input {...register("title")} type="text" className="rounded-xl w-full p-5 border border-gray-600 active:ring-2" placeholder="Title" />
                <textarea maxLength={100} {...register("text")} type="Write" className="sm:h-52 overflow-hidden rounded-xl w-full p-5 border border-gray-400 active:ring-2" placeholder="Write a note..." />
                <button className="rounded-xl mx-5 w-1/2 text-center p-5 bg-blue-400 text-white hover:translate-x-1 hover:translate-y-1 sm:hover:ring-2 sm:hover:ring-white">Add note</button>
            </form>
        </article>
    )
}