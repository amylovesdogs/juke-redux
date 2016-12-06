import React from 'react';

const Lyrics = (props) => {
  const lyrics = props.lyrics;
  const setArtist = props.setArtist;
  const artistQuery = props.artistQuery; // artist name  inputted so far
  const setSong = props.setSong;
  const songQuery = props.songQuery; // song name  inputted so far
  const submit = props.submit;

  const artistChange = e => {
    setArtist(e.target.value);
  };

  const songChange = e => {
    setSong(e.target.value);
  };

  return (
    <div id="lyrics">
      <form className='form-group' style={{marginTop: '20px'}}  onSubmit={submit}>
        <input
          type="text"
          onChange={artistChange}
          value={artistQuery}
          className='form-control'
          placeholder="Enter artist name"
        />
        <input
          type="text"
          onChange={songChange}
          value={songQuery}
          className='form-control'
          placeholder="Enter artist's song'"
        />
        <pre>{lyrics}</pre>
        <button type="submit">Search for Lyrics</button>
      </form>
    </div>
  )
}

export default Lyrics;
