import { Link } from 'react-router-dom'

import logo from '../assets/img/logo.svg'

import facebook from '../assets/svg/footer/facebook.svg'
import pintrest from '../assets/svg/footer/pintrest.svg'
import twitter from '../assets/svg/footer/twitter.svg'


export function AppFooter() {

    return (
        <section className="footer">
            <div className="footer-container main-layout">

                <div className="footer-content flex row space-between">
                    <div className="flex row">

                        <div className="footer-bar flex-column-center">
                            <div className="logo"><img src={logo} alt="" /></div>
                            <div className="footer-link-btns flex row align-center space-between">
                                <Link to={'/'}>home</Link>
                                <Link to={'/'}>about</Link>
                            </div>
                        </div>
                        <div className="footer-address">
                            <p>987  Hillcrest Lane</p>
                            <p>Irvine, CA</p>
                            <p>California 92714</p>
                            <p>Call Us : 949-833-7432</p>

                        </div>
                    </div>

                    <div className="footer-right flex column space-between">
                        <div className="social-bar flex row space-between">
                            <img src={facebook} alt="" />
                            <img src={pintrest} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                        <p className="footer-copyrights">Copyright 2020. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
