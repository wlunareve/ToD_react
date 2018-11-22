import { toggleCheckbox } from '../../../redux/actions';
import { connect } from 'react-redux'
import ClockWithSwitch from './ClockWithSwitch';

// mapStateToProps: 取得 state 資料，當 store 的 state 有更動時*每次都會被調用，
// mapStateToProps 會收到整個 store 的 state ，必須返回一個 object 作為 props 給 component 使用，而 object 的內容呢則為我們需要用到的 state 。

const mapStateToprops = (state) => {
    return{
        checked: state.checkbox.checked
    }
}

// mapDispatchToProps: 這個參數可能是 function 或 object 。
// 若為 function : 只在 component 建立時調用，會收到 dispatch 作為參數，然後我們需要 return 一個帶有 function 的 object ，使用 dispatch 來發送 action 。
// 若為 object : value 帶有 action creators ，每個 action creators 都會轉變成 props function ，並在調用時自動發送 action 。
// 註記：：react-redux推薦使用 object 簡寫語法形式。

const mapDispatchToProps = (dispatch) => {
    return{
        handleChange: () => dispatch(toggleCheckbox())
    }
}

// function 寫法
export default connect(mapStateToprops, mapDispatchToProps)(ClockWithSwitch);
