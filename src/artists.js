import React, {Component} from 'react';

const Artist = ({onSelectArtist, artist: {id, name, genre, year, img, selected}}) => {
  return (
    <li className='card'>
      <img src={img} alt="Avatar"/>
      <div className='container'>
        <div
          className={`heart ${selected ? 'red' : ''}`}
          onClick={() => onSelectArtist(id)}>&hearts;</div>
        <h4><b>{name}</b></h4>
        <p>{`${genre} - ${year}`}</p>
      </div>
    </li>
  )
}
class Artists extends Component {
  render() {
    const {onSelectArtist, artists} = this.props;
    return (
      <div className='artists'>
        <ul>
          {artists.map(artist => {
            return (
              <Artist
                key={artist.id}
                onSelectArtist={onSelectArtist}
                artist={artist}
              />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Artists;
