import React, { useState } from 'react';
import '../chat-style.css';
import { AddCircleOutline } from 'react-ionicons';
import { HappyOutline } from 'react-ionicons';

export const ChatComponent = ({ chatValue }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && message.trim() !== '') {
            setMessages([...messages, message]);
            setMessage(''); // Limpiar el input después de enviar el mensaje
        }
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div className='chat-component'>
            <header>
                <img srcSet={chatValue.avatar} alt='' />
                <span>{chatValue.username}</span>
            </header>
            
            <div className='chat-container'>
                {messages.map((msg, index) => (
                    <div key={index} className="message-container yours">
                        <img className='message-user-icon yours' srcSet={chatValue.avatar}></img>
                        <div className='message'>
                            <p>{msg}</p>
                        </div>
                    </div>
                ))}
            </div>

            <footer>
                {/* <AddCircleOutline color={'#61dafb'} height="30px" width="30px" style={{position: "absolute", zIndex: "1", bottom: "47px", marginLeft: "10px"}}/> */}
                <input 
                    placeholder="Write a message here" 
                    className="chat-input" 
                    type="text" 
                    value={message} 
                    onChange={handleChange} 
                    onKeyPress={handleKeyPress}
                />
                {/* <HappyOutline color={'#61dafb'} height="30px" width="30px" style={{position: "absolute", zIndex: "1", bottom: "47px", marginRight: "50px"}}/> */}
            </footer>
        </div>
    );
};