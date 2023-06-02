const Hero = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src="http://via.placeholder.com/640x360"
            alt="Hero img"
            className="md:w-1/2 rounded-lg "
          />
          <div className="md:w-1/2 md:mt-0 flex flex-col gap-4 md:gap-6">
            <h2 className="text-white font-bold text-3xl lg:text-4xl">Lorem ipsum dolor sit</h2>
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dignissimos odit blanditiis. Placeat iste commodi eaque quibusdam similique saepe, voluptatibus delectus, autem provident iusto magni.
            </p>
            <a href="#" className="inline-block py-2 px-4 rounded bg-white font-bold hover:bg-slate-200 focus:ring focus:ring-slate-500 focus:bg-white transition cursor-pointer self-start">Lorem</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
