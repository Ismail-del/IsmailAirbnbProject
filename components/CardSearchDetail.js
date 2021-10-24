import Image from 'next/image';

function CardSearchDetail({ img, location, title, description,
 star, price, total }) {
    return (
        <div className="cursor-pointer p-4 rounded-2xl mb-4 shadow-lg flex hover:shadow-xl first:border-t">
            <div className="relative w-40 h-40 sm:w-64 sm:h-64 lg:h-80 lg:w-80">
                <Image 
                    className="rounded-2xl hover:opacity-80" 
                    src={img}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className="w-1/2 ml-4 flex-grow flex flex-col">
                <div className="flex-grow">
                    <p>{location}</p>
                    <h1 className="text-lg font-bold">{title}</h1>
                    <p className="text-gray-400">{description}</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="">{star}</p>
                </div>

            </div>
            <div className="flex flex-col justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-16 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <div className="">
                    <h1 className="font-bold">{price}</h1>
                    <p>{total}</p>
                </div>
            </div>
        </div>
    )
}

export default CardSearchDetail;
