import {connect} from 'react-redux';
import {compose, withHandlers, withState} from 'recompose';
import { createNewPlayer } from 'src/actions/async';
import AddPlayerRender from 'src/components/add-player/AddPlayerRender';

export default compose(
    connect(
        null,
        { createNewPlayer }
    ),
    withState('name', 'setname', ''),
    withState('position', 'setposition', ''),
    withHandlers({
        onSubmit: ({name, position, createNewPlayer}) => e => {
            e.preventDefault();
            createNewPlayer({name, position});
        },
        onChange: props => value => {
            props.setValue(value);
        },
        handleInputChange: props => event => {
            const target = event.target;
            const value = event.target.value;
            const inputName = target.name;

            props[`set${inputName}`](value);
        }
    }),
)(AddPlayerRender);
