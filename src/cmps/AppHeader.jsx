import { Link } from 'react-router-dom'

import logo from '../assets/img/logo.svg'


export function AppHeader() {


    return (
        <section className="app-header" >
                <div className="app-header-container main-layout ">
                <div className="header-bar flex-row-center">
                   <div className="logo"><img  src={logo} alt="" /></div> 
                    <div className="header-link-btns flex-row-center">
                        <Link to={'/'}>home</Link>
                        <Link to={'/'}>about</Link>
                    </div>

                    <button className="contact-btn"><span>contact us</span> </button>
                </div>
                </div>

            </section>
    )
}