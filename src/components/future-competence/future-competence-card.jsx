import './future-competence-style.css'

function FutureCompetenceCard(props) {
    return (
        <div className="futBlock">
            <div className="futDesc">
                <h3 className="futName">{props.futName}</h3>          
            </div>
        </div>
    )
}

export default FutureCompetenceCard