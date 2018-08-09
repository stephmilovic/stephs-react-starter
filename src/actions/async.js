import axios from 'axios';
import {playersAreLoading, playersFetchDataSuccess, playerFetchDataSuccess, playersHaveError} from './index';

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