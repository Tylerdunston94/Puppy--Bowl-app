import React, { useState } from 'react';

const NewPlayerForm = ({ setPlayers }) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [team, setTeam] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPlayer = { name, owner, team };
        // Call to API to save this player
        // After saving, fetch updated player list
        // Example: setPlayers(prev => [...prev, newPlayer]); (Add after API call)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Player Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Owner" value={owner} onChange={(e) => setOwner(e.target.value)} required />
            <input type="text" placeholder="Team" value={team} onChange={(e) => setTeam(e.target.value)} required />
            <button type="submit">Add Player</button>
        </form>
    );
};

export default NewPlayerForm;
