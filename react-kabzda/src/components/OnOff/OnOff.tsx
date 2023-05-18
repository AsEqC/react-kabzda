

interface OnOffType {
    isOnOff: boolean
    onClick: (on: boolean) => void
}


export function OnOff(props: OnOffType) {
    const onStyle = {
        color: "black",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.isOnOff ? "palegreen" : "white"
    }
    const offStyle = {
        color: "black",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.isOnOff ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.isOnOff ? "palegreen" : "red"
    }
    const onClicked = () => (props.onClick(true))
    const offClicked = () => (props.onClick(false))

    return <div>
        <button onClick={onClicked} style={onStyle}>On</button>
        <button onClick={offClicked} style={offStyle}>Off</button>
        <span style={indicatorStyle}></span>
    </div>

}

