import {createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';

const logger = createLogger();

console.log("lyricReducer: ",lyricsReducer);
console.log("playerReducer: ",playerReducer);
const store = createStore(
  combineReducers({
    lyrics: lyricsReducer,
    player: playerReducer
  }),
  applyMiddleware(logger, thunkMiddleware)
);

export default store;

