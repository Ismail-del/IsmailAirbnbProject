import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { format } from 'date-fns';
import CardSearchDetail from "../components/CardSearchDetail";
import Map from "../components/Map";

function Search({ searchResult }) {

    const router = useRouter();
    

    const { location, startDate, endDate, numberGuest } = router.query;

    const newStartDateFormat = format(new Date(startDate), "dd/LL/yyyy");
    const newEndDateFormat = format(new Date(endDate), "dd/LL/yyyy");


    

    

    return (
        <div>
            <Header placeholder={`${newStartDateFormat} to ${newEndDateFormat} for ${numberGuest}`}/>
                <main className="flex flex-col xl:flex xl:flex-row xl:items-center">
                    <section className="pt-14 px-6">
                        <p className="border inline-block p-4 rounded-full hover:bg-gray-300 shadow-xl mb-7 text-lg font-bold">{`From ${newStartDateFormat} to ${newEndDateFormat} for ${numberGuest} people of guests`}</p>
                        <h1 className="text-2xl font-bold mb-4">Stays in {location}</h1>
                        <div className="flex space-x-2 mb-7">
                            <p className="button__search">Cancellation</p>
                            <p className="button__search">Type of Place</p>
                            <p className="button__search">Ismail</p>
                            <p className="button__search">Saghraoui</p>
                        </div>
                        <section>
                            {searchResult?.map(({ img, location, title, description, star, price, total }) => (
                                <CardSearchDetail 
                                    key={Math.random()}
                                    img={img}
                                    location={location}
                                    title={title}
                                    description={description}
                                    star={star}
                                    price={price}
                                    total={total}
                                />
                            ))}
                        </section>
                    </section>
                    <section className="mx-auto xl:min-w-[600px] overflow-scroll scrollbar-hide">
                        <div className="h-[130rem]">
                           <Map searchResult={searchResult}/> 
                        </div>
                        
                    </section>
                </main>
            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps(){
    const searchResult = await fetch('https://jsonkeeper.com/b/B2XH')
        .then(res => res.json())
    
    return {
        props:{
            searchResult
        }
    }
}
