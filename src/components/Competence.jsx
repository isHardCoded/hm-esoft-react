import { useState } from 'react'

import Skills from './Skills'
import ShowCompetencies from './actions/ShowCompetencies'
import FilterCompetencies from './actions/FilterCompetencies'

import SkillsData from '../data/SkillsData'
import CompetenceData from '../data/CompetenceData'

const CompetenceCards = (props) => {
    return (
        <button className="showCompBtn">
            <div className="compBlock">
                <div className="compDesc">
                    <img className="compImage" src={props.image} alt="compImage" />
                    <div className="flexCompDesc">
                        <h3 className="compName">{props.name}</h3>
                        <p className="compDescText">{props.description}</p>
                        <p className="compProgressText">Progress: {props.progress}%</p>      
                    </div>          
                </div>
            </div>
        </button>
    )
}

function Competence() {

    const skillsCards = SkillsData.map((skills) => (
        <Skills
            skillName = {skills.name}
            skillDesc = {skills.description}
            skillImage = {skills.image}
            key = {skills.id}
        />
    ))

    const [open, setOpen] = useState(false);
    const [filterByProgress, setFilterByProgress] = useState(null);
    const [filteredData, setFilteredData] = useState(CompetenceData);

    const handleFilter = (progress) => {
        setFilterByProgress(progress);
        if (progress === 'Greater') {
            const filtered = CompetenceData.filter(competence => competence.progress > 50);
            setFilteredData(filtered);
        } else if (progress === 'Lesser') {
            const filtered = CompetenceData.filter(competence => competence.progress < 50);
            setFilteredData(filtered);
        } else if (progress === 'All') {
            const filtered = CompetenceData.filter(competence => competence.progress);
            setFilteredData(filtered);
        }
    };

    const handleClick = () => {
        setOpen((open) => !open)
    }
    
    return (
        <>
            <div className="skillsCards">
                {skillsCards}
            </div>
            
            <div className="titleCompetences">
                <h1 className="titleCompetencesText">Competencies I want to learn</h1>
                <ShowCompetencies
                    open={open} 
                    onClick={handleClick}
                />
                {open && (
                   <div className="filterButtons">
                        <FilterCompetencies onClick={() => handleFilter('Greater')} label="> 50"/>
                        <FilterCompetencies onClick={() => handleFilter('All')} label="Show all"/>
                        <FilterCompetencies onClick={() => handleFilter('Lesser')} label="< 50"/>
                   </div>     
                )}
            </div>

            {open && (
                
                <div className="competenceCards">
                    {filteredData.map((competence) => (
                        <CompetenceCards
                            name = {competence.name}
                            description = {competence.description}
                            image = {competence.image}
                            progress = {competence.progress}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default Competence