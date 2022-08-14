import { useForm } from "react-hook-form";
export default function AddNote(params) {
    //forms hook
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        let dt = new Date();
        dt = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
        params.addNote(prev => [...prev, { ...data, date: dt }]);
        reset();
    };
    //Component 
    return (
        <article className="sm:w-2/3 sm:text-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center p-2 gap-3">
                <input {...register("title", {
                    required: true, minLength: 1
                })} type="text" className="rounded-xl w-full p-5 border border-gray-600 active:ring-2" placeholder="Title" />
                <textarea {...register("text", {
                    required: true,
                    maxLength: 200,
                    minLength: 2,
                })} type="Write" className="sm:h-52 overflow-hidden rounded-xl w-full p-5 border border-gray-400 active:ring-2" placeholder="Write a note..." />
                <button className="rounded-xl mx-5 w-1/2 text-center p-5 bg-blue-400 text-white hover:translate-x-1 hover:translate-y-1 sm:hover:ring-2 sm:hover:ring-white">Add note</button>
            </form>
        </article>
    )
}