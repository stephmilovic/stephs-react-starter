import {connect} from 'react-redux';
import {scheduleFetchData} from 'src/actions/async';
import {compose, lifecycle} from 'recompose';
import ScheduleRender from 'src/components/schedule/ScheduleRender';

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
)(ScheduleRender);
