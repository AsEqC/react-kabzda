import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {useState} from "react";


function App() {
    let [ratingValue,setRatingValue] = useState<RatingValueType>(5)
    let [isOnOff,setIsOnOff] = useState<boolean>(false)
    let [accordionCollapsed,setAccordionCollapsed] = useState<boolean>(false)
    return (
        <div>
            <Accordion titleValue={'Menu'} accordionCollapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <OnOff isOnOff={isOnOff} onClick={setIsOnOff}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

type TitlePropsType = {
    title: string
}
const PageTitle = (props: TitlePropsType) => <h1>{props.title}</h1>

export default App;
