function Water(props) {

    let state = "Ice"
    if (props.frozen){
        state = "Water"
    }
    return <div>Switch is {state}</div>
    
}
export default Water;