import React from 'react';
import Artists from './artists';

const Favorite = ({artists, onSelectArtist}) => {
  return (
    <div>
      {artists.length > 0
        ? <Artists
            artists={artists}
            onSelectArtist={onSelectArtist}
          />
        : <h3>Add your favorite artist from the search results! &hearts;</h3>
      }
    </div>
  );
}

export default Favorite;
