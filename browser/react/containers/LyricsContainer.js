import React from 'react';
import store from "../store";
import Lyrics from "../components/Lyrics";
import { setLyrics } from "../action-creators/lyrics";
import axios from 'axios';

const initialState = {
  lyrics: '',
  songQuery: '',
  artistQuery: ''
};

class LyricsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = Object.assign({},initialState,store.getState());
    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.submit = this.submit.bind(this);
  }

  setArtist(artist) {
    this.setState({artistQuery: artist});
  }

  setSong(song) {
    this.setState({songQuery: song});
  }

  submit() {
    console.log("in submit");
    axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
    .then(response=>{
      console.log("got back lyrics: ",response.data)
      console.log("passing in: ",response.data.lyric);
      console.log("setLyrics: ",setLyrics);
      let action = setLyrics(response.data.lyric);
      console.log("action is ",action);
      store.dispatch(action);
    })
    .catch(err => console.log(err));
  }

  getStoreSlice () {
    const currentState = store.getState();
    console.log("In slice, got state: ",currentState);
    return {
        lyrics: currentState.lyrics
    };
  }

  componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
          let slice = this.getStoreSlice();
          console.log("slice is",slice);
          this.setState(slice);
          console.log("state is: ",this.state);
      });
  }

  componentWillUnmount() {
      this.unsubscribe();
  }

  render () {
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