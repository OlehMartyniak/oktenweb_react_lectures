import React, {useEffect, useState} from 'react';
import {getAlbums} from "../../services/service";
import {AlbumComponent} from "./AlbumComponent";

const AlbumsComponent = () => {

    let [albums,setAlbums] = useState([]);

    useEffect(()=> {
        getAlbums().then(value => setAlbums( [...value]))
    },[]);

    return (
        <div>
            <h3>Albums list</h3>
            {albums.map(value => <AlbumComponent key={value.id} item={value}/>)}
        </div>
    );
};


export {AlbumsComponent};