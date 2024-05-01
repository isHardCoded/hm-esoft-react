import profileImage from '../assets/images/user.png'

function Profile() {

    const username = "isHardCoded"
    const desc = "Hi there! My name is Kirill. I am studing at College of Digital and Educational Technologies"

    return (
        <div className="profileBlock">
            <div className="profileContent">
                <img src={profileImage} className='profileImage' alt="profileImage" /> 
                <div className="profileInfo">
                    <h3 className="profileName">{username}</h3>
                    <p className='profileText'>{desc}</p>   
                </div>
            </div>      
        </div>
    )
}

export default Profile