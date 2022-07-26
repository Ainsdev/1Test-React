import Name from './Name.jsx';
import About from './About.jsx';

function AppBusinessCard() {

  return (
    <div className="w-screen sm:py-4 sm:px-24 bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400
      dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <section className='text-center flex justify-center'>
        <img className='sm:w-1/2 sm:rounded-2xl sm:hover:-translate-y-2 sm:hover:translate-x-1 sm:ring-white ring-1' src="./src/assets/IMG-20220228-WA0001.jpg" />
      </section>
      <Name />
      <About />
    </div>
  )
}

export default AppBusinessCard
