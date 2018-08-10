import {connect} from 'react-redux';
import {scheduleFetchData} from 'src/actions/async';
import {compose, lifecycle} from 'recompose';
import PropTypes from 'prop-types';
import Schedule from 'src/components/schedule/ScheduleRender';

Schedule.displayName = 'Schedule';

Schedule.propTypes = {
    name: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    position: PropTypes.string.isRequired,
};

export default compose(
    connect(
        ({schedule}) => {
            return {
                schedule: schedule.schedule,
                hasError: schedule.scheduleHasError,
                isLoading: schedule.scheduleIsLoading,
            };
        },
        { scheduleFetchData }
    ),
    lifecycle({
        componentDidMount() {
            if (!this.props.schedule.length) {
                this.props.scheduleFetchData();
            }
        },
    }),
)(Schedule);
