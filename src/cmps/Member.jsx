import comma from '../assets/svg/stories/comma.svg'


export function Member({ member }) {

    return (
        <section className="member flex">
            <img className="comma" src={comma} alt="" />
            <div className="member-content flex-column-center">
                <p className="member-text">{member.text}</p>
                <p className="member-name">{member.name}</p>
                <p className="member-job">{member.job}</p>
                <img src={member.avatar} alt="" />
            </div>

        </section>
    )
}