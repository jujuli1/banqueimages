import React, { useEffect, useState } from 'react';

const Certif = () => {
    const [photos, setPhotos] = useState([]); // État pour stocker les photos
    const [error, setError] = useState(null); // État pour gérer les erreurs

    useEffect(() => {
        // Récupérer les données des photos depuis le backend
        const fetchPhotos = async () => {
            try {
                const response = await fetch('http://localhost:5000/photos');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des photos');
                }
                const data = await response.json();
                setPhotos(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div>
            <h1>Certifications</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {photos.map((photo) => (
                    <div key={photo.id}>
                        <img
                            src={`http://localhost:5000/images/${photo.filepath}`}
                            alt={photo.title || 'Photo'}
                            style={{ width: '200px', height: 'auto' }}
                        />
                        <h3>{photo.title}</h3>
                        <p>{photo.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certif;
