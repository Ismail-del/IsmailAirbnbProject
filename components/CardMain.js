import Image from "next/image"

function CardMain({ img, title, description }) {
    return (
        <div className="cursor-pointer space-x-2 hover:scale-105 transform duration-500 ease-out p-2">
            <div className="relative h-72 w-72 sm:h-96 sm:w-96">
                <Image className="rounded-lg" src={img} 
                    layout="fill"
                />
            </div>
            <h1 className="font-bold text-lg">{title}</h1>
            <h1>{description}</h1>
        </div>

    )
}

export default CardMain
