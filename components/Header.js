import Image from 'next/image';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header({ placeholder }) {

    const router = useRouter();

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberGuest, setNumberGuest] = useState(1);

    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    }

    const onSearchInputHandler = (e) => {
        setSearchInput(e.target.value);
    };

    const numberGuestHandler = (event) => {
        setNumberGuest(event.target.value)
    }

    const handleSelect = (ranges) => {
        
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const onCancelHandler = () => {
        setSearchInput("");
    }

    const onMainPageHandler = () => {
        router.push('/');
    }

    const onClickSearchPageHandler = () => {
        router.push({
            pathname:'/search',
            query:{
                location:searchInput,
                startDate:startDate.toISOString(),
                endDate:endDate.toISOString(),
                numberGuest:numberGuest,
            }
        })
    }

    return (
        <header className="sticky top-0 z-50 p-4 shadow-md grid grid-cols-3 md:px-8 bg-white">
            <div onClick={onMainPageHandler} className="relative h-10 flex items-center cursor-pointer">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                    layout='fill'
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* Search bar */}
            <div className="flex items-center shadow-md rounded-full">
                <input value={placeholder || searchInput} onChange={onSearchInputHandler} className="text-gray-400 flex-grow outline-none pl-4 overflow-scroll" type="text" placeholder="Search"/>
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
            {searchInput && 
            <div className="col-span-3 mx-auto border-2 shadow-xl">
                <DateRangePicker 
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                    rangeColors={['#FD5B61']}
                    minDate={new Date()}
                />
            <div className="flex items-center">
                <h1 className="text-xl font-bold ml-4 mb-3 flex-grow">Number of Guests</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <input type="number" min={1} value={numberGuest}
                    onChange={numberGuestHandler}
                    className="w-10 mx-3 outline-none border-2 border-blue text-red-400"/>
            </div>
            <div className="flex my-3">
                <button onClick={onCancelHandler} className="flex-grow">Cancel</button>
                <button onClick={onClickSearchPageHandler} className="flex-grow text-red-500">Search</button>

            </div>
            </div>
            
            }
        </header>
    )
}

export default Header
