const Hero = () => {
  return (
    <section className="bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="http://via.placeholder.com/640x360"
            alt="Hero img"
            className="md:w-1/2 rounded-lg"
          />
          <div className="mt-8 md:w-1/2 md:mt-0 md:ml-10 h-auto">
            <h2 className="text-white text-3xl font-bold mb-4">
              Lorem ipsum dolor sit
            </h2>
            <p className="text-white mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dignissimos odit blanditiis. Placeat iste commodi eaque quibusdam similique saepe, voluptatibus delectus, autem provident iusto magni at? Aliquid distinctio quo quaerat.
            </p>
            <a href="#" className="inline-block py-2 px-4 rounded bg-white font-bold hover:bg-slate-200 focus:ring focus:ring-slate-500 focus:bg-white transition cursor-pointer">Lorem</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero