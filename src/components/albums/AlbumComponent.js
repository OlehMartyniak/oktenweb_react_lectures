import React from 'react';

const AlbumComponent = ({item}) => {
    return (
        <div>
            <h4>{item.id} - {item.title}</h4>
        </div>
    );
};

export {AlbumComponent};