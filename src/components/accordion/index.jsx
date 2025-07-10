import { useState } from "react"

import data from "./data";
import "./styles.css";
//single selection
//multiple seelection
const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [multiselection, setmultisetSelection] = useState(false);
    const [multiple, setMultiples] = useState([]);
    function handleSingleSelection(getcurrentId) {
        console.log(multiselection);
        setSelected(getcurrentId);
    }
    function enableMultipleSelection() {
        if (multiselection == false) {
            setmultisetSelection(true)
        } else {
            setMultiples([]);
            setmultisetSelection(false)
        }
    }
    function handleMultiSelection(getcurrentId) {
        let cpymultiple = [...multiple];
        const findIndexofCurrentId = cpymultiple.indexOf(getcurrentId);
        if (findIndexofCurrentId == -1) {
            cpymultiple.push(getcurrentId);
        } else {
            cpymultiple.slice(getcurrentId);
        }
        setMultiples(cpymultiple);

    }
    return (
        <>
            <div className="wrapper accordian">
                <div className="width-500">
                    <h2>Accordion</h2>
                    <button onClick={() => enableMultipleSelection()}>{multiselection == false ? "Enable" : "Disable"} Multiple Selection</button>
                    {
                        (data && data.length > 0 ?
                            (data.map((dataItem) => (
                                <div className="single-item item" key={dataItem.id}>
                                    <div className="acc-wrapper " onClick={multiselection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} >
                                        <h3 className="title">{dataItem.question}</h3>
                                    </div>
                                    {(selected === dataItem.id) || (multiple.indexOf(dataItem.id) !== -1) ? (
                                        <div className="content">{dataItem.answer}</div>
                                    ) : ""}
                                </div>

                            ))) :
                            (
                                <div>No data is found</div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Accordion;