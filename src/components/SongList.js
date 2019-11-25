import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
   const [songs, setSongs] = useState([
        { title: 'Black Hole', id: 1},
        { title: 'Beast', id: 2 },
        { title: 'Demons', id: 3 }
    ]);
    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, { title: title, id: uuid() }]);
    }
    // runs every time the component re-renders or data changes
    // the 2nd parameter tells useEffect to watch specific data and only rerender when that data changes
    useEffect(() => {
        console.log('useEffect hook will only run when songs data changes')
    }, [songs])
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id}>{song.title}</li>
                    );
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    );
}

export default SongList;
