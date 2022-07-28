function Home() {

    return (
        <section className="w-screen h-screen dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black flex justify-center items-center flex-col sm:flex-row gap-x-9 gap-y-9">
            <a href="business-card" class="relative px-6 py-3 font-bold text-white group">
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full border-4 border-white"></span>
                <span class="relative text-black">Business Card</span>
            </a>
            <a href="travel-journal" class="relative px-6 py-3 font-bold text-white group">
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full border-4 border-white"></span>
                <span class="relative text-black">Travel Journal</span>
            </a>
            <a href="button" class="relative px-6 py-3 font-bold text-white group">
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full border-4 border-white"></span>
                <span class="relative text-black">Button</span>
            </a>
            <a href ="button" class="relative px-6 py-3 font-bold text-white group">
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full border-4 border-white"></span>
                <span class="relative text-black">Button</span>
            </a>
        </section>
    )
}

export default Home 