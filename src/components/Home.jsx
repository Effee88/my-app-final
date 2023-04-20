import React from "react"
import Banner from "./banner/Banner"
import Cart from "./cart/Cart"
import TestSlider from "./testSlider"

const Home =(props)=>{
    return(
        <>
        <TestSlider/>
        <Banner />
        <div className="text-section">
            <h2>
                Путешествие от TOURIST
            </h2>
            <p>
            Мы предоставляем широкий спектр услуг в сфере туризма. Мы предлагаем нашим клиентам возможность отправиться в увлекательные и незабываемые путешествия в любую точку мира.
            </p>
            <p>
            У нас есть многолетний опыт работы в туристической индустрии, и мы всегда стараемся предоставить нашим клиентам самые лучшие услуги. Наша цель - сделать ваше путешествие незабываемым и беззаботным.
            </p>
        </div>
        <Cart
            item={props.item}
            overlayItems={props.overlayItems}
            setOverlayItems={props.setOverlayItems}
            setSearch={props.setSearch}
            search={props.search}
            favorites={props.favorites}
            setFavorites={props.setFavorites}
        />
      </>
    )
}
export default Home