import { Member } from './Member'

import avatar1 from '../assets/svg/stories/avatar1.svg'
import avatar2 from '../assets/svg/stories/avatar2.svg'
import avatar3 from '../assets/svg/stories/avatar3.svg'

import leftoval from '../assets/svg/stories/leftoval.svg'
import bottomoval from '../assets/svg/stories/bottomoval.svg'


export function Stories() {


    const members = [
        { avatar: avatar1, name: 'Kady Baker', job: 'Product Manager at Bookmark', text: '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”' },
        { avatar: avatar2, name: 'Aiysha Reese', job: 'Founder of Manage', text: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”' },
        { avatar: avatar3, name: 'Arthur Clarke', job: 'Co-founder of MyPhysio', text: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”' },

    ]


    return (
        <section className="stories">
            <img className="p-absolute" src={leftoval} alt="" />
            <div className="stories-container main-layouts">

                <div className="stories-content flex-column-center">
                    <div className="stories-title title">
                        Delivering real results for top
                        companies. Some of our <span>success stories.</span>
                    </div>
                    <div className="members-container flex-row-center">
                        
                        {members.map((member, idx) => <Member key={idx} member={member} />)}

                    </div>

                </div>

            </div>
            <img className="bottomoval" src={bottomoval} alt="" />
        </section>
    )
}