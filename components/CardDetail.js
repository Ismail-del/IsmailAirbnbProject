import Image from 'next/image';

function CardDetail({ img, title }) {
    
    return (
        <div className="cursor-pointer space-x-2 hover:scale-105 transform duration-500 ease-out p-2">
            <div className="relative h-80 w-80 shadow-lg">
                <Image src={img} 
                    layout="fill"
                    className="py-4 rounded-xl"
                />
            </div>
            <h1 className="font-bold mb-2">{title}</h1>
        </div>

    )
}

export default CardDetail
