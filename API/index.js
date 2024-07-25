export const fetchPlayers = async () => {
    try {
        const response = await fetch('https://your-puppy-bowl-api-endpoint.com/players');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch players:", error);
        return [];
    }
};

// Additional API functions can be created for creating or deleting players.
