import axios from 'axios';
import {
    playersAreLoading,
    playersFetchDataSuccess,
    playerFetchDataSuccess,
    playersHaveError,
    addNewPlayer,
} from './players';

import {
    scheduleIsLoading,
    scheduleFetchDataSuccess,
    scheduleHasError,
} from './schedule';

const url = '//localhost:3000';

export function playersFetchData() {
    return (dispatch) => {
        dispatch(playersAreLoading(true));

        axios.get(url + '/roster')
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(playersAreLoading(false));

                return response;
            })
            .then((response) => dispatch(playersFetchDataSuccess(response.data)))
            .catch(() => dispatch(playersHaveError(true)));
    };
}

export function playerFetchData(number) {
    return (dispatch) => {
        dispatch(playersAreLoading(true));
        axios.get(url + `/roster/${number}`)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(playersAreLoading(false));

                return response;
            })
            .then((response) => dispatch(playerFetchDataSuccess(response.data)))
            .catch(() => dispatch(playersHaveError(true)));
    };
}

export function createNewPlayer(newPlayer) {
    return (dispatch) => {
        // dispatch(playersAreLoading(true));
        axios.post(url + '/newplayer', newPlayer)
            .then((response) => {
                if (response.status !== 201) {
                    throw Error(response.statusText);
                }

                // dispatch(playersAreLoading(false));

                return response;
            })
            .then((response) => dispatch(addNewPlayer(response.data)))
            .catch(() => dispatch(playersHaveError(true)));
    };
}

export function scheduleFetchData() {
    return (dispatch) => {
        dispatch(scheduleIsLoading(true));

        axios.get(url + '/schedule')
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(scheduleIsLoading(false));

                return response;
            })
            .then((response) => dispatch(scheduleFetchDataSuccess(response.data)))
            .catch(() => dispatch(scheduleHasError(true)));
    };
}
