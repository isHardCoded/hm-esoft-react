function ShowCompetencies(props) {

    return (
        <button className="showBtn" onClick={props.onClick}>
          {props.open ? 'Hide competencies' : 'Show competencies'}
        </button>
    );
}

export default ShowCompetencies