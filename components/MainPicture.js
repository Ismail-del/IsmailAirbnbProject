import Image from 'next/image';

function MainPicture() {
    return (
        <section className="relative">
            <div className="relative min-w-[300px] h-[250px] sm:h-[320px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] my-5">
                <Image className="rounded-xl" src="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 100%"
                    quality="100"
                />
            </div>
            <div className="absolute top-11 left-4">
                <h1 className="text-2xl font-bold mb-2">The Greatest Outdoors</h1>
                <h1 className="font-bold mb-3">Wishlists curated by <u>Ismail Saghraoui</u></h1>
                <button className="bg-black text-white p-2 rounded-lg cursor-pointer hover:scale-110 transform duration-500 ease-out">Get inspired</button>
            </div>
        </section>

    )
}

export default MainPicture
