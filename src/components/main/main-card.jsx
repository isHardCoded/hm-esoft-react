import './main-style.css'

function MainCard(props) {
    return (
        <div className="mainBlock">
            <div className="mainContent">
                <img src={props.mainImage} className='mainImage' alt="mainImage" /> 
                <div className="mainInfo">
                    <h3 className="mainName">{props.mainName}</h3>
                    <p className='mainText'>{props.mainDesc}</p>
                    <div className="mainContact">
                        <a href="https://vk.com/ninezitrax">
                            <img src="/src/assets/images/vk.png" className="vkLink" alt="vk.png" />
                        </a>
                        <a href="https://t.me/ninezitrax" className="tgLink">
                            <img src="/src/assets/images/tg.png" className="tgLink" alt="tg.png" />
                        </a>
                    </div>      
                </div>
            </div>      
        </div>
    )
}

export default MainCard