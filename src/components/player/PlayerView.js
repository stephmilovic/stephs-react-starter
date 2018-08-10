import {connect} from 'react-redux';
import {playersFetchData} from 'src/actions/async';
import {compose, lifecycle} from 'recompose';
import PlayerRender from 'src/components/player/PlayerRender';

export default compose(
    connect(
        ({roster}, ownProps) => {
            return {
                players: roster.players,
                player: roster.players[ownProps.match.params.number],
                hasError: roster.playersHaveError,
                isLoading: roster.playersAreLoading,
            };
        },
        { playersFetchData }
    ),
    lifecycle({
        componentDidMount() {
            if (!Object.keys(this.props.players).length) {
                this.props.playersFetchData();
            }
        },
    }),
)(PlayerRender);
