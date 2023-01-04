import React from 'react';
import preloader from './Rolling-1s-200px.svg';
import stylePreloader from './preloader.module.css'

const Preloader = () => {
    return (
        <div className={stylePreloader.loader}>
            <img src={preloader} alt=""/>
        </div>
    )
}
export default Preloader