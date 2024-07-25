import React, { useEffect, useState } from 'react';
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer'; // Import the SinglePlayer component
import { fetchPlayers } from './API';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const loadPlayers = async () => {
            const data = await fetchPlayers();
            setPlayers(data);
        };

        loadPlayers();
    }, []);

    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <Router>
            <div>
                <input 
                    type="text" 
                    placeholder="Search players..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <Routes>
                    <Route path="/" element={<AllPlayers players={filteredPlayers} />} />
                    <Route path="/new" element={<NewPlayerForm setPlayers={setPlayers} />} />
                    <Route 
                        path="/players/:id" 
                        element={<SinglePlayer players={players} />} 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
