import leftoval from '../assets/svg/inviter/leftoval.svg'

export function Inviter() {

    return (
        <section className="inviter">
            <img className="leftoval" src={leftoval} alt="" />
            <div className="inviter-container main-layout">

                <div className="inviter-content flex-row-center">
                <p className="inviter-title flex row title">Ready to get Started?</p>
            <button className="contact-btn revert"><span>contact us</span></button>

                </div>
            </div>

        </section>
    )
}