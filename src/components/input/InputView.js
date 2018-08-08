import {connect} from 'react-redux';
import {compose, withHandlers} from 'recompose';
import {setMessage} from 'src/actions/message';
import InputRender from 'src/components/input/InputRender';

export default compose(
    connect(
        null,
        { setMessage }
    ),
    withHandlers({
        onChange: props => value => {
            props.setMessage(value);
        },
    }),
)(InputRender);
