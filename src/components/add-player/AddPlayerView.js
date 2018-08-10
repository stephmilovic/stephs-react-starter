import {connect} from 'react-redux';
import {compose, withHandlers, withState} from 'recompose';
import PropTypes from 'prop-types';
import { createNewPlayer } from 'src/actions/async';
import AddPlayer from 'src/components/add-player/AddPlayerRender';

AddPlayer.displayName = 'AddPlayer';

AddPlayer.propTypes = {
    name: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    position: PropTypes.string.isRequired,
};

export default compose(
    connect(
        null,
        { createNewPlayer }
    ),
    withState('name', 'setname', ''),
    withState('position', 'setposition', ''),
    withHandlers({
        onSubmit: props => e => {
            const {name, position, createNewPlayer} = props;
            e.preventDefault();
            createNewPlayer({name, position});
            props.setname('');
            props.setposition('');
        },
        handleInputChange: props => event => {
            const target = event.target;
            const value = event.target.value;
            const inputName = target.name;

            props[`set${inputName}`](value);
        },
    }),
)(AddPlayer);
