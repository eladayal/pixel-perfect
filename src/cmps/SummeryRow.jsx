export function SummeryRow({ row }) {

    return (
        <section className="summery-row flex row">
            <img src={row.icon} alt="" />

            <div className="summery-row-content flex column">
                <p className="row-title">{row.title}</p>
                <p className="row-text">{row.text}</p>
            </div>

        </section>
    )
}