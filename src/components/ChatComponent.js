import React from 'react'
import '../chat-style.css'
import { AddCircleOutline } from 'react-ionicons'
import { HappyOutline } from 'react-ionicons'

export const ChatComponent = ({ chatValue }) => {
    console.log(chatValue);

    return (
        <div className='chat-component'>
            <header>
                <img srcSet={chatValue.avatar} alt=''></img>
                <span>{chatValue.username}</span>
            </header>
            
            <div className='chat-container'>

            </div>

            <footer>
                <AddCircleOutline color={'#61dafb'} height="30px" width="30px" style={{position: "absolute", zIndex: "1", bottom: "47px", marginLeft: "10px"}}/>
                <input placeholder="Write a message here" class="chat-input" type="text" />
                <HappyOutline color={'#61dafb'} height="30px" width="30px" style={{position: "absolute", zIndex: "1", bottom: "47px", marginRight: "50px"}}/>
            </footer>
        </div>
    )
}
