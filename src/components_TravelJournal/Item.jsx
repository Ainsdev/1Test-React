
const Item = (props) => {
    let img = props.img;
    let date = props.date;
    return (
        <section className="w-1/2 h-72 my-3 rounded-lg border flex items-center p-6 hover:border-black hover:translate-x-1">
            <div style={{ backgroundImage: `url(${img})` }} className="w-1/2 h-full rounded-lg bg-cover bg-center"></div>
            <article className="pl-5 flex flex-col">
                <section className="flex pb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                    <h3 className="font-extrabold">{props.location}</h3>
                    <a className="ml-4 text-blue-500" target="a" href={props.link}>See in a Map</a>
                </section>
                <section className="flex flex-col">
                    <h1 className="text-3xl font-bold font-serif pb-3">{props.name}</h1>
                    <p className="pb-1 font-medium">{date}</p>
                    <p className="text-md">{props.description}</p>
                </section>
            </article>
        </section>
    )
}
export default Item;   