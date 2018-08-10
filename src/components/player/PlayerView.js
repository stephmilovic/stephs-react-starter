import {connect} from 'react-redux';
import {playersFetchData} from 'src/actions/async';
import {compose, lifecycle} from 'recompose';
import PropTypes from 'prop-types';
import Player from 'src/components/player/PlayerRender';

Player.displayName = 'Player';

Player.propTypes = {
    player: PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.number,
        position: PropTypes.string,
    }),
};

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
)(Player);
