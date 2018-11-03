function check(){
    return {
        type: 'CHECK'
    }
}

function uncheck(){
    return {
        type: 'UNCHECK'
    }
}

function toggleCheckbox(checked){
    return{
        type: 'TOGGLE_CHECKBOX',
    }
}

export { check, uncheck, toggleCheckbox };