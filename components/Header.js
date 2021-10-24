import Image from 'next/image'

function Header() {
    return (
        <header className="sticky top-0 z-50 p-4 shadow-md grid grid-cols-3 md:px-8 bg-white">
            <div className="relative h-10 flex items-center cursor-pointer">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                    layout='fill'
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* Search bar */}
            <div className="flex items-center shadow-md rounded-full">
                <input className="text-gray-400 flex-grow outline-none pl-4" type="text" placeholder="Search"/>
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline-flex text-white h-8 w-8 bg-red-400 p-2 rounded-full cursor-pointer mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            <div className="flex space-x-4 items-center justify-end text-gray-500">
                {/* earth */}
                <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div className="flex items-center justify-center space-x-2 shadow-md p-2 rounded-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header
