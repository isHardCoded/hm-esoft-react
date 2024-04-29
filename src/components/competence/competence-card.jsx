import './competence-style.css'

function CompetenceCard(props) {
    return (
        <div className="compBlock">
            <div className="compDesc">
                <h3 className="compName">{props.compName}</h3>
                <p className='compText'>{props.compDesc}</p>            
            </div>
        </div>
    )
}

export default CompetenceCard