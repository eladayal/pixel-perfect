import { SummeryRow } from './SummeryRow'

import icon1 from '../assets/svg/summery/icon1.svg'
import icon2 from '../assets/svg/summery/icon2.svg'
import icon3 from '../assets/svg/summery/icon3.svg'
import rightoval from '../assets/svg/summery/rightoval.svg'

export function Summery() {

    const summeryRows = [
        { icon: icon1, title: 'Experienced Individuals', text: 'Our network is made up of highly experienced professionals who are passionate about what they do.' },
        { icon: icon2, title: 'Easy to Implement', text: 'Our processes have been refined over years of implementation meaning our teams always deliver.' },
        { icon: icon3, title: 'Enhanced Productivity', text: 'Our customized platform with in-built analytics helps you manage your distributed teams.' },

    ]
    console.log('summeryRows:', summeryRows);

    return (
        <section className="summery">
            <div className="summery-container main-layout">

                <div className="summery-content-container flex-row-center">
                    <div className="summery-title title">
                        Build  &#38; manage
                        distributed teams
                        like no one else.
                    </div>

                    <div className="summery-rows-container flex column">
                        {summeryRows.map((row, idx) => <SummeryRow key={idx} row={row} />)}
                    </div>
                </div>
            </div>

            <img className="summery-rightoval" src={rightoval} alt="" />
        </section>
    )
}


