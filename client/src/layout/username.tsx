import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Username() {
    const [username, setUsername] = useState(Cookies.get('username') || '');
    const navigate = useNavigate();

    const handleUsernameChange = (event:any) => {
        setUsername(event.target.value);
    };

    const handleSendClick = async () => {
        Cookies.set('username', username);
        var response = await fetch(`http://localhost:9000/${username}`, {
            method: 'GET',
        })
        var data = await response.text()
        console.log(data)
        console.log(username);
        navigate('/room');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 space-y-8 bg-white rounded shadow-xl">
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                />
                <button
                    onClick={handleSendClick}
                    className="w-full px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                >
                    Send
                </button>
            </div>
        </div>
    );
}