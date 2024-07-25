import React from 'react';
import { Link } from 'react-router-dom';

const AllPlayers = ({ players }) => {
    return (
        <div>
            <h1>Puppy Bowl Players</h1>
            {players.length > 0 ? (
                players.map(player => (
                    <div key={player.id}>
                        <h2>{player.name}</h2>
                        <Link to={`/players/${player.id}`}>See Details</Link>
                        {/* Add DELETE button handling here if you want */}
                    </div>
                ))
            ) : (
                <p>No players found.</p>
            )}
        </div>
    );
};

export default AllPlayers;
