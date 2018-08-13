import {connect} from 'react-redux';
import {compose, withHandlers, withState, lifecycle} from 'recompose';
import PropTypes from 'prop-types';
import ForecastSelector from 'src/components/forecast-selector/ForecastSelectorRender';
import {selectForecastOption} from 'src/actions/forecast';

ForecastSelector.displayName = 'ForecastSelector';

// ForecastSelector.propTypes = {
//     location: PropTypes.string.isRequired,
//     handleInputChange: PropTypes.func.isRequired,
//     onSubmit: PropTypes.func.isRequired,
// };
export default compose(
    connect(
        ({forecastOption}) => {
            return {
                forecastOption,
            };
        },
        { selectForecastOption }
    ),
    withState('option', 'changeOption', ''),
    withHandlers({
        onSubmit: props => e => {
            const {location, getLocation} = props;
            e.preventDefault();
            getLocation(location);
            props.setlocation('');
        },
        handleOptionChange: ({selectForecastOption, changeOption}) => event => {
            selectForecastOption(event.target.value);
            changeOption(event.target.value);
        },
    }),
    lifecycle({
        componentWillMount() {
            this.props.changeOption(this.props.forecastOption);
        },
    })
)(ForecastSelector);
