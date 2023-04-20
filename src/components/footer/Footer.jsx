import style from './footer.module.css';

const Footer =()=>{
    return(
        <footer>
                <div className={style.logo}>
                TOURIST
                </div>
                <p>
               Наш номер номер: +7 (800) 800-80-80
                <br/>
                <br/>
                Туристическая компания "ТУРИСТ"
                </p>
            </footer>
    )
}
export default Footer