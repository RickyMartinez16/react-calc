import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"

function Button(props){

    const getStyleName = button => {
        
        const className = {
            "=" : "equals",
            "x" : "operations",
            "-" : "operations",
            "+" : "operations",
            "/" : "operations",
        }
        return className[button]
    }

    const { calc, setCalc } = useContext(CalcContext);

    const commaClick = () => {
        setCalc({
            ...calc, 
            num: 16
        })
    }

    const handleButtonClick = () => {
        
        const result = {
            "." : commaClick
        }
        return result[props.value]()
    }

    return(
        <button onClick={handleButtonClick}className={`${getStyleName(props.value)} button`}>{props.value}</button>
    )
}

export default Button