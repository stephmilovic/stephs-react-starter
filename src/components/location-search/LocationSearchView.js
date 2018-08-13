import {connect} from 'react-redux';
import {compose, withHandlers, withState} from 'recompose';
import PropTypes from 'prop-types';
import { getLocation } from 'src/actions/async';
import LocationSearch from 'src/components/location-search/LocationSearchRender';

LocationSearch.displayName = 'LocationSearch';

LocationSearch.propTypes = {
    location: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default compose(
    connect(
        null,
        { getLocation }
    ),
    withState('location', 'setlocation', ''),
    withHandlers({
        onSubmit: props => e => {
            const {location, getLocation} = props;
            e.preventDefault();
            getLocation(location);
            props.setlocation('');
        },
        handleInputChange: props => event => {
            const target = event.target;
            const value = event.target.value;
            const inputName = target.name;

            props[`set${inputName}`](value);
        },
    }),
)(LocationSearch);
