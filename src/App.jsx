import './App.css'
import './components/main/main-style.css'
import './components/competence/competence-style.css'
import './components/future-competence/future-competence-style.css'
import UserImage from './assets/images/user.png'
import CompetenceCard from './components/competence/competence-card'
import MainCard from './components/main/main-card'
import FutureCompetenceCard from './components/future-competence/future-competence-card'

function App() {

  const competenceData = [
    {compName: "Python", compDesc: "My firse langage. I have been learning it since 2022. Contact with me. Making telegram/vk bots."},
    {compName: "JavaScript", compDesc: "My first langage. I have been learning it since 2022. Contact with me. Making telegram/vk bots."},
    {compName: "C#", compDesc: "My first langage. I have been learning it since 2022. Contact with me. Making telegram/vk bots."},
    {compName: "HTML", compDesc: "My first langage. I have been learning it since 2022. Contact with me. Making telegram/vk bots."},
  ]

  const futureCompetenceData = [
    {futName: "React"},
    {futName: "NodeJS"},
    {futName: "TypeScript"},
    {futName: "PostgreSQL"},
    {futName: "Angular"},
    {futName: "NextJS"},
    {futName: "Docker"},
    {futName: "Django"},
    {futName: "Express"},
    {futName: "Java"},
  ]


  const competenceCards = competenceData.map((competence) => (
    <CompetenceCard 
      compName = {competence.compName}
      compDesc = {competence.compDesc}
    />
  ))

  const futureCompetenceCards = futureCompetenceData.map((futureCompetence) => (
    <FutureCompetenceCard
      futName = {futureCompetence.futName}
      futDesc = {futureCompetence.futDesc}
    />
  ))

  return (
    <>
      <MainCard
        mainImage = {UserImage}
        mainName = "isHardCoded"
        mainDesc = "Hi there! My name is Kirill. I am studing at College of Digital and Educational Technologies"
      />

      <div className="competenceCards">
        {competenceCards}
      </div>

      <h1 className="competence-title">Competencies I want to learn</h1>
      <div className="futureCompetenceCards">
        {futureCompetenceCards}
      </div>
    </>
  )
}

export default App
