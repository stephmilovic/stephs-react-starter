import {connect} from 'react-redux';
import {playersFetchData} from 'src/actions/async';
import {compose, lifecycle} from 'recompose';
import FullRosterRender from 'src/components/full-roster/FullRosterRender';

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
)(FullRosterRender);
