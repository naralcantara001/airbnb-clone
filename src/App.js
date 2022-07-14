import React from 'react';
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {datas} from "./data"

export default function App() {
  const cardComponent = datas.map((item) => {
      return (
       <Card 
            key={item.id}
            coverImg={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
       />

      //  or spread operator
      //  <Card
      //       key={item.id}
      //       {...item}
      //   />
       
      )
  })
  return (
    <div className="container">
      <Navbar />
      <Hero/>
      <section className='card'>
            {cardComponent}
      </section>
     
    </div>
  );
}
