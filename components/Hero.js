import Image from 'next/image';

function Hero() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image className="object-bottom" src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
                layout="fill"
                objectFit="cover"
                
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="font-bold">Not sure where to go ? Perfect</p>
                <button className="text-purple-500 font-bold bg-white py-3 px-5 rounded-full my-2 shadow-md hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
            </div>
        </div>
    )
}

export default Hero
