import Head from 'next/head'
import CardCity from '../components/CardCity'
import CardDetail from '../components/CardDetail'
import CardMain from '../components/CardMain'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MainPicture from '../components/MainPicture'

export default function Home({ dataCities, cardDetail, cardMain }) {
  
  return (
    <div className="">
      <Head>
        <title>Ismail AirBnb</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"></link>
      </Head>

      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section>
          <h1 className="font-bold text-2xl py-4">Explore Nearby</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dataCities?.map(item => {
            return <CardCity 
            key={Math.random()}
            img={item.img} 
            location={item.location} 
            distance={item.distance}/>
          })}
          </div>

        </section>
        <section>
          <h1 className="font-bold text-2xl py-4">Live anywhere</h1>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide">
            {cardDetail?.map(item => {
              return <CardDetail key={Math.random()} img={item.img} title={item.title}/>
            })}
          </div>

        </section>
        
        <MainPicture />
        <section>
          <h1 className="font-bold text-2xl py-4">Discover things to do</h1>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide lg:flex lg:items-center">
            {cardMain?.map(item => {
              return <CardMain key={Math.random()} img={item.img} title={item.title} description={item.description}/>
            })}
          </div>

          
        </section>

        
      </main>
      <Footer />

    </div>
  )
}

export async function getStaticProps(){
  const dataCities = await fetch('https://jsonkeeper.com/b/5BW6')
    .then(res => res.json())
  
  const cardDetail = await fetch('https://jsonkeeper.com/b/G8G4')
    .then(res => res.json());

  const cardMain = await fetch('https://jsonkeeper.com/b/TRY6')
    .then(res => res.json())
  return {
    props:{
      dataCities,
      cardDetail,
      cardMain
    }
  }
}
