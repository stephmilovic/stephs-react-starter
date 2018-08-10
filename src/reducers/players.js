import {
    PLAYERS_HAVE_ERROR,
    PLAYERS_ARE_LOADING,
    PLAYERS_FETCH_DATA_SUCCESS,
    PLAYER_FETCH_DATA_SUCCESS,
    ADD_NEW_PLAYER,
} from 'src/types';
import { combineReducers } from 'redux';


export function playersHaveError(state = false, action) {
    switch (action.type) {
        case PLAYERS_HAVE_ERROR:
            return action.hasError;
        default:
            return state;
    }
}

export function playersAreLoading(state = false, action) {
    switch (action.type) {
        case PLAYERS_ARE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function players(state = {}, action) {
    switch (action.type) {
        case PLAYERS_FETCH_DATA_SUCCESS:
            return action.players;
        case ADD_NEW_PLAYER:
            return {...state, ...action.player};
        default:
            return state;
    }
}

export function player(state = {}, action) {
    switch (action.type) {
        case PLAYER_FETCH_DATA_SUCCESS:
            return action.player;
        default:
            return state;
    }
}

export const roster = combineReducers({
    players,
    playersHaveError,
    playersAreLoading,
    player,
});