function Statistics({ title, stats }) {
    // let titleElement;
    // if (title) {
    //     titleElement = ;
    // }
    return (
        <section className="statistics">
            {/* {titleElement} */}
            {title? <h2 className="title">{title}</h2> : null}

            <ul className="stat-list">
                {stats.map((item, index) => {
                    return (
                        <li className="item" key={index}>
                            <span className="label">{item.label}</span>
                            <span className="percentage">{item.percentage}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Statistics;
