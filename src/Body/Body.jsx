function Body() {
  return (
    <div className="relative">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/014/115/non_2x/tropical-leaves-background-design-summer-leaves-flat-illustration-simple-banner-with-copy-space-free-vector.jpg"
          alt="background-img"
        />
      </div>
      <div className=" grid  grid-flow-col gap-7 mt-4 p-10 items-center absolute inset-0">
        <div className="flex flex-col p-6 rounded-lg">   
          <h1 className="text-3xl font-bold mb-4">The Best Way To Show Case your Porject </h1>
          <p className="text-3xl font-bold mb-4">
            Nature is an inherent character or constitution, particularly of the
            ecosphere or the universe as a whole. In this general sense nature
            refers to the laws, elements and phenomena of the physical world,
            including life
          </p>
          <div className="flex  space-x-4 ">
            <div>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer rounded-lg py-3 w-28 ">
                Try for fee
              </button>
            </div>
            <div>
              <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-pink-500 hover:to-blue-500 cursor-pointer rounded-lg py-3 w-32">
                See it Works
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-80  rounded-lg shadow-lg"
            src="https://media.istockphoto.com/id/1534040386/photo/an-outdoor-bamboo-gazebo-nestled-amidst-lush-greenery-offering-serene-relaxation-after-a.jpg?s=2048x2048&w=is&k=20&c=KraJw0UatD1mMxZy7iBY3CwJnJWkYWS0xjUx2_ZLxGU="
            alt="Nature img"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
