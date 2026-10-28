function Banner() {
  return (
    <section className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center gap-8 py-8 md:py-12">
      <div className="w-full order-2 md:order-1 md:w-1/2">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello! Welcome to my book store Learn <span className="text-pink-500">about something!!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            voluptatum! Vel excepturi mollitia voluptatem exercitationem,
            id voluptates laborum! Quisquam, deserunt.
          </p>

          <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
              aria-hidden="true"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" className="grow" placeholder="Email" aria-label="Email" />
          </label>
        </div>
        <button className="btn mt-4 btn-secondary">Secondary</button>
      </div>
      <div className="order-1 w-full md:w-1/2 flex justify-center">
        <img src="/Banner.jpg" className="h-auto w-full max-w-lg object-contain" alt="Books and reading" />
      </div>
    </section>
  );
}

export default Banner;
