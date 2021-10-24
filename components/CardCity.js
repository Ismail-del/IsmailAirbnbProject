import Image from 'next/image';


function CardCity({ img, location, distance }) {
    return (
        <div className="flex items-center rounded-lg 
        hover:bg-gray-100 cursor-pointer hover:scale-105 transition transform duration-500 ease-out">
            <div className="relative h-16 w-16 my-2">
                <Image src={img}
                    layout="fill"
                    className="rounded-md"
                />
            </div>
            <div className="ml-3 text-gray-500">
                <h1>{location}</h1>
                <h1>{distance}</h1>
            </div>
        </div>
    )
}

export default CardCity
