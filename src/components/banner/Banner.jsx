import { Link } from 'react-router-dom';
import style from './banner.module.css';
const Banner =()=>{
    return(
        <div className={style.banner_section}>
        <div className={style.banner}>
            <p className={style.text_banner}>
                Скидка 20%
            <br/>
            <span>
                За офрмление летнего тура
            </span>
            <br/>

            <Link exact to={'/form'}>
            <button className={style.banner_btn}>
            Оставить заявку
            </button>
            </Link>
            
          </p>

        </div>
    </div>
    )
}
export default Banner