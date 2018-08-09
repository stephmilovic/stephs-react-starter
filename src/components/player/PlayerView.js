import {connect} from 'react-redux';
import {playerFetchData} from 'src/actions/async';
import {compose, lifecycle} from 'recompose';
import PlayerRender from 'src/components/player/PlayerRender';

export default compose(
    connect(
        state => {
            const {roster} = state;
            return {
                player: roster.player,
                hasError: roster.playersHaveError,
                isLoading: roster.playersAreLoading,
            };
        },
        { playerFetchData }
    ),
    lifecycle({
        componentDidMount() {
            this.props.playerFetchData(this.props.match.params.number);
        },
    }),
)(PlayerRender);
