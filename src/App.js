import './App.css';
import { ChatComponent } from './components/ChatComponent';
import { FriendList } from './components/FriendsListComponent';
import { PlaceholderComponent } from './components/PlaceholderComponent';
import { SideMenuComponent } from './components/SideMenuComponent';
import React, { useState } from 'react';

function App() {
	const [selectedFriend, setSelectedFriend] = useState(null);

	const handleFriendClick = (friend) => {
		setSelectedFriend(friend);
	};

	return (
		<div className="App">
			<header className="App-header">
				<SideMenuComponent />
				<FriendList onFriendClick={handleFriendClick}/>
				{selectedFriend ? <ChatComponent chatValue={selectedFriend} /> : <PlaceholderComponent />}
			</header>
		</div>
	);
}

export default App;