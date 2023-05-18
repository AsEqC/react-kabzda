
type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    onClick: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => props.onClick(!props.accordionCollapsed)}/>
            {!props.accordionCollapsed && <AccordionBody/>}
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
