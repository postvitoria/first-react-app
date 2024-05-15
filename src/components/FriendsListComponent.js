import { PersonAddOutline, SettingsOutline, StorefrontOutline } from 'react-ionicons'

export const FriendList = ({ onFriendClick }) => {
    const user = {
        username: "Dreikyzz",
        description: "24k me quedan dos balas 😈",
        avatar: "https://i.seadn.io/gcs/files/3085b3fc65f00b28699b43efb4434eec.png",
    }

    const friends = [
        {username: "Kailopi", description: "Mondogo 💖", avatar: "https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/oUPMCbQzfDEI87DrADtlWsC53EBJF1AfPNAIZs~tplv-tej9nj120t-origin.webp"},
        {username: "F.L.O.W.E.R.S", description: "Meta Quest 3", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQug8bYxXaQrOXJI04GDaIgu0LmZFEvNzRnJiiHreZ8Jw&s"},
        {username: "Manuelprots", description: "Night Gangwars CEO", avatar: "https://i.pinimg.com/originals/6e/c5/9a/6ec59a46147bb7e1e21a748cb4ac63bd.gif"},
        {username: "Efimael", description: "Pito de mono", avatar: "https://wallpapers-clan.com/wp-content/uploads/2022/09/darling-in-the-franxx-zero-two-pfp-1.jpg"},
        {username: "NachoASD", description: "Marbella Developer 🖥️", avatar: "https://encrypted-tbn0.gstatic.com/avatars?q=tbn:ANd9GcT3GoEytKSFXLLRYDF3L9gqqgJV1IwW464eT4KE7fGbRQ&s"},
    ]

    const handleClick = (newValue) => {
        onFriendClick(newValue);
    };

    return (
        <div style={{borderRight: "2px solid #1f2126"}}>
            <div className="personal-info-container">
                <img srcSet={user.avatar} alt=''></img>
                <span className="personal-info-username">{user.username}</span>
                <p className="personal-info-description">{user.description}</p>

                <div className="personal-info-icons-container">
                    <PersonAddOutline color={'#61dafb'} height="20px" width="20px" style={{cursor: "pointer"}}/>
                    <StorefrontOutline color={'#61dafb'} height="20px" width="20px" style={{marginLeft: "20px", cursor: "pointer"}}/>
                    <SettingsOutline color={'#61dafb'} height="20px" width="20px" style={{marginLeft: "20px", cursor: "pointer"}}/>
                </div>
            </div>

            <span className="friends-title">Friends List</span>
            <div className="friends-container">                
                {
                    friends.map((friend, index) => {
                        return (
                            <div className="friend-item" key={index} onClick={() => handleClick(friend)}> 
                                <img srcSet={friend.avatar} alt=""/>
                                <span>{friend.username}</span>
                                <p>{friend.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
