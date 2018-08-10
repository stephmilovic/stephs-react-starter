import {connect} from 'react-redux';
import {playersFetchData} from 'src/actions/async';
import {compose, lifecycle} from 'recompose';
import PropTypes from 'prop-types';
import FullRoster from 'src/components/full-roster/FullRosterRender';

FullRoster.displayName = 'FullRoster';

FullRoster.propTypes = {
    players: PropTypes.string.isRequired,
    isLoading: PropTypes.func.isRequired,
    hasError: PropTypes.func.isRequired,
};

export default compose(
    connect(
        ({roster}) => {
            return {
                players: roster.players,
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
)(FullRoster);
