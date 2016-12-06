import React from 'react';
import store from "../store";
import Lyrics from "../components/Lyrics";
import { fetchLyrics } from "../action-creators/lyrics";


const initialState = {
  lyrics: '',
  songQuery: '',
  artistQuery: ''
};

class LyricsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = Object.assign({},initialState,this.getStoreSlice());
    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.submit = this.submit.bind(this);
    console.log("initial state: ", this.state);
  }

  setArtist(artist) {
    this.setState({artistQuery: artist});
  }

  setSong(song) {
    this.setState({songQuery: song});
  }

  submit() {
    store.dispatch(fetchLyrics(this.state.artistQuery,this.state.songQuery));
  }

  getStoreSlice () {
    const currentState = store.getState();
    console.log("In slice, got state: ",currentState);
    return {
        lyrics: currentState.lyrics.lyrics
    };
  }

  componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
          let slice = this.getStoreSlice();
          // console.log("slice is",slice);
          this.setState(slice);
          // console.log("state is: ",this.state);
      });
  }

  componentWillUnmount() {
      this.unsubscribe();
  }

  render () {
    console.log("Lyrics state: ",this.state);
    return (
      <Lyrics lyrics={this.state.lyrics}
              setArtist={this.setArtist}
              artistQuery={this.state.artistQuery}
              setSong={this.setSong}
              songQuery={this.state.songQuery}
              submit={this.submit} />
    );
  }
}

export default LyricsContainer;