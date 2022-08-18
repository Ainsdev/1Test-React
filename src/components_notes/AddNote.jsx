import { useForm } from "react-hook-form";
export default function AddNote(params) {
    //forms hook
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        let date = new Date();
        let dt = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
        let hour = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        params.addNote(prev => [...prev, { ...data, date: dt, hour: hour }]);
        reset();
    };
    //Component 
    return (
        <article className="sm:w-2/3 sm:text-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center p-2 gap-3">
                <input {...register("title", {
                    required: true, minLength: 1, maxLength: 20
                })} type="text" className="rounded-xl w-full p-5 border border-black active:ring-2" placeholder="Title" />
                <textarea {...register("text", {
                    required: true,
                    minLength: 2,
                })} type="Write" className="sm:h-52 overflow-hidden rounded-xl w-full p-5 border border-black active:ring-2" placeholder="Write a note..." />
                <button className="rounded-xl mx-5 w-1/2 text-center p-5 bg-blue-400 text-white hover:translate-x-1 hover:translate-y-1 sm:hover:ring-2 sm:hover:ring-white">Add note</button>
            </form>
        </article>
    )
}