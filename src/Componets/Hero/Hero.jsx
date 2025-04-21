import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <section className="">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row-reverse lg:justify-center lg:gap-70">

                    {/* Image Section */}
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://static.vecteezy.com/system/resources/previews/056/482/628/large_2x/modern-desert-home-design-dome-roof-patio-plants-free-png.png" alt="Booking Illustration" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>

                    {/* Text Content Section */}
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-2xl md:text-5xl font-bold leading-none sm:text-6xl">
                            Book your <span className="dark:text-violet-600">Dream Stay</span> Today
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            Discover amazing places, exclusive deals, and personalized stays — all in one place.
                            <br className="hidden md:inline lg:hidden" />
                            Hassle-free hotel bookings made easy.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start ">
                            <Link to="/available-room"><a rel="noopener noreferrer" href="#bookings" className="bg-[#C73450] text-white rounded-xl border-none px-8 py-3 text-lg font-semibold border ">
                                My Bookings
                            </a></Link>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Hero;