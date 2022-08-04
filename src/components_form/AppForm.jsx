import React from "react";

const AppForm = () => {

    const [form, setForm] = React.useState({
        name: "",
        password: "",
        passwordConfirm: "",
        newsletter: true,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setForm(
            {
                ...form,
                [name]: type === "checkbox" ? checked : value
            }
        )
    }
    function handleSubmit(event) {
        event.preventDefault()
        if (form.password === form.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
        }

        form.newsletter ?? console.log("You are not subscribed to the newsletter")
    }
    return (
        <section className="bg-black w-screen h-screen flex flex-col justify-start items-center p-5">
            <h1 className="text-white text-4xl">Form App</h1>
            <article>
                <form onSubmit={handleSubmit} className="flex flex-col mt-24 items-center text-white font-medium bg-purple-500 px-16 py-10 rounded-3xl text-lg">
                    <label>Name</label>
                    <input onChange={handleChange} name="name" value={form.name} className="my-3 focus:ring-2 p-2 rounded-md focus:ring-black text-black" type="text" placeholder="Marco Aurelio" />
                    <label>Password</label>
                    <input onChange={handleChange} name="password" value={form.password} className="my-3 focus:ring-2 p-2 rounded-md focus:ring-black text-black" type="password" placeholder="********" />
                    <label>Confirm password</label>
                    <input onChange={handleChange} name="passwordConfirm" value={form.passwordConfirm} className="my-3 focus:ring-2 p-2 rounded-md focus:ring-black text-black" type="password" placeholder="********" />
                    <div className="flex justify-evenly text-sm">
                        <input
                            onChange={handleChange}
                            name="newsletter"
                            checked={form.newsletter}
                            id="okayToEmail"
                            type="checkbox"
                        />
                        <label htmlFor="okayToEmail">Join to newsletter</label>
                    </div>
                    <button className="mt-5 font-bold py-3 px-9 bg-black rounded-xl hover:ring-2 hover:ring-white hover:translate-x-1" type="submit">Create</button>
                </form>
            </article>
            <article className="my-10">
                <h1 className="text-white text-4xl font-semibold">Thanks, we love you {form.name}</h1>
            </article>
        </section>
    );
}
export default AppForm;