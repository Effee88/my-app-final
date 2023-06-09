import Product from "./item/Product"
import style from './cart.module.css';
import axios from "axios";

const Cart = (props) => {

    const onAddOverlay = async (obj)=>{
        try{
            const findOverlay = props.overlayItems.find(objOver => objOver.myId === obj.myId);
            if(findOverlay)
            {
            axios.delete(`https://637f91cc5b1cc8d6f949a307.mockapi.io/cart/${findOverlay.id}`)
            props.setOverlayItems((over) => over.filter(item => item.myId !== obj.myId))
            }
            else{
              const {data} = await axios.post('https://637f91cc5b1cc8d6f949a307.mockapi.io/cart', obj)
                props.setOverlayItems([...props.overlayItems, data]);
            }
        }
        catch{
            alert('произошла ошибка')
        }
     
    }
    
    const onClickSearch = (inputValue) => {
       props.setSearch(inputValue.target.value); 
    }

    const onAddFav = async (obj)=>{

        try{
            const findFavorites = props.favorites.find(objFav => objFav.myId === obj.myId)
             if(findFavorites){
            axios.delete(`https://637f91cc5b1cc8d6f949a307.mockapi.io/favorites/${findFavorites.id}`)
            props.setFavorites((over) => over.filter(item => item.myId !== obj.myId))
        }
        else{
          const {data} = await  axios.post('https://637f91cc5b1cc8d6f949a307.mockapi.io/favorites', obj)
        props.setFavorites([...props.favorites, data]);
        }
        }
        catch{
            alert('произошла ошибка')
        }
       
    }


    return (
            <div className={style.cart}>
                {
                    props.item.filter((item)=> item.title.toLowerCase().includes(props.search.toLowerCase()))
                    .map(obj => {
                        return (
                            <Product 
                                key={obj.id}
                                id={obj.id}
                                myId={obj.myId}
                                title={obj.title}
                                price={obj.price}
                                img={obj.img}
                              
                                favBtn={
                                    (favObj) => {
                                        onAddFav(favObj)
                                    }
                                }

                                onPlus={(cartObj)=>{
                                    console.log(cartObj)
                                    onAddOverlay(cartObj)
                                }   
                                }
                            />
                        )
                    })
                }
            </div>
    )
}

export default Cart