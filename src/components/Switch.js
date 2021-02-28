function Switch(props) {

    let state = "off"
    if (props.on){
        state = "on"
    }
    return <div>Switch is {state}</div>
    
}
export default Switch;