import { toggleCheckbox } from '../redux/actions';
import { connect } from 'react-redux'
import ClockWithSwitch from './ClockWithSwitch';

const mapStateToprops = (state) => {
    return{
        checked: state.checkbox.checked
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleChange: () => dispatch(toggleCheckbox())
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(ClockWithSwitch);