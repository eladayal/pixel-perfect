import leftoval from '../assets/svg/hero/left-oval.svg'
import bottomoval from '../assets/svg/hero/bottom-oval.svg'


export function Hero() {

    return (
        <section className="hero">
            <div className="hero-container main-layout">
                    <img className="hero-leftoval" src={leftoval} alt="" />

                <div className="hero-content-container flex row align-center space-between">
                    <div className="hero-title">Find the best <span>talent</span></div>
                    <div className="hero-context">
                        Finding the right people and building high
                        performing teams can be hard. Most companies
                        aren't tapping into the abundance of global talent.
                        We're about to change that.
                    </div>

                </div>


            </div>
                    <img className="hero-bottomoval" src={bottomoval} alt="" />
        </section>
    )
}