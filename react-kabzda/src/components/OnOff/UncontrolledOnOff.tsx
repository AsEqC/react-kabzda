

interface OnOffType {
}


export function UncontrolledOnOff(props: OnOffType) {
    let [on, setOn] = React.useState(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "palegreen" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "palegreen" : "red"
    }
    const onClicked = () => (setOn(true))
    const offClicked = () => (setOn(false))
    return <div>
        <button onClick={onClicked} style={onStyle}>On</button>
        <button onClick={offClicked} style={offStyle}>Off</button>
        <span style={indicatorStyle}></span>
    </div>
}






// export function OnOff(props: OnOffType) {x
//     return  <div>
//         <OnOffStyle color={props.On ? "palegreen" : "steelblue"}>
//             <Indicator></Indicator>
//         </OnOffStyle>
//     </div>
// }
// const OnOffStyle = styled.button`
//     background-color: ${props => {
//         if (props.color) {
//             return "palegreen"
//         }
//         return "steelblue"
//     }};
// `