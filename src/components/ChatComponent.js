import React from 'react'
import '../chat-style.css'
import { SearchOutline } from 'react-ionicons'

export const ChatComponent = ({ chatValue }) => {
    return (
        <div className='chat-container'>
            <header>
                <img srcSet={chatValue.avatar} alt=''></img>
                <span>{chatValue.username}</span>

                {/* <SearchOutline color={'#61dafb'} height="25px" width="25px" style={{poistion: "absolute", right: "0", margin: "5px", cursor: "pointer"}}/> */}
            </header>

            <footer>

            </footer>
        </div>
    )
}
