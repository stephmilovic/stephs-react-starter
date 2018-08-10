import {
    PLAYERS_HAVE_ERROR,
    PLAYERS_ARE_LOADING,
    PLAYERS_FETCH_DATA_SUCCESS,
    PLAYER_FETCH_DATA_SUCCESS,
    ADD_NEW_PLAYER,
} from 'src/types';

export function playersHaveError(bool) {
    return {
        type: PLAYERS_HAVE_ERROR,
        hasError: bool,
    };
}

export function playersAreLoading(bool) {
    return {
        type: PLAYERS_ARE_LOADING,
        isLoading: bool,
    };
}

export function playersFetchDataSuccess(players) {
    return {
        type: PLAYERS_FETCH_DATA_SUCCESS,
        players,
    };
}

export function playerFetchDataSuccess(player) {
    return {
        type: PLAYER_FETCH_DATA_SUCCESS,
        player,
    };
}

export function addNewPlayer(player) {
    return {
        type: ADD_NEW_PLAYER,
        player,
    };
}
