import {connect} from 'react-redux';
import {compose} from 'recompose';
import PropTypes from 'prop-types';
import Weather from 'src/components/weather/WeatherRender';

Weather.displayName = 'Weather';

// Weather.propTypes = {
//     location: PropTypes.object,
// };

export default compose(
    connect(
        ({location, forecastOption}) => {
            return {
                location: location.location ? location.location[location.location.activeLocation] : '',
                hasError: location.locationHasError,
                isLoading: location.locationIsLoading,
                forecastOption,
            };
        }
    )
)(Weather);
