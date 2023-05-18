
type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = React.useState<boolean>(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type TitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: TitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}


function AccordionBody() {
    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}
