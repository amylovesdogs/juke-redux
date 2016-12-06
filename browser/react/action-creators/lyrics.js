import {SET_LYRICS} from '../constants';

export function setLyrics (text) {
  console.log("setLyric, passed in ",text);
  return {
    type: SET_LYRICS,
    lyrics: text
  }
}
