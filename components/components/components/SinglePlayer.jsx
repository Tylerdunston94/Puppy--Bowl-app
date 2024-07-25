import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePlayer = ({ players }) => {
    const { id } = useParams();
    const player = players.find(p => p.id === parseInt(id)); // Parse ID to match the player's ID type.

    if (!player) return <h2>Player not found</h2>;

    return (
        <div>
            <h2>{player.name}</h2>
            <p>Owner: {player.owner}</p>
            <p>Team: {player.team}</p>
        </div>
    );
};

export default SinglePlayer;
