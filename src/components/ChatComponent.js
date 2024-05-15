import React from 'react'
import '../chat-style.css'
// import { SearchOutline } from 'react-ionicons'

export const ChatComponent = ({ chatValue }) => {
    return (
        <div className='chat-component'>
            <header>
                <img srcSet={chatValue.avatar} alt=''></img>
                <span>{chatValue.username}</span>
            </header>
            
            <div className='chat-container'>

            </div>

            <footer>
                <input placeholder="Write a message here" class="chat-input" type="text"> 

                </input>
            </footer>
        </div>
    )
}
