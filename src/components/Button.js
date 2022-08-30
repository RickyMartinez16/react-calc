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
            num: !calc.number.toString().includes('.') ? calc.num + props.value : calc.num 
        })
    }

    const resetClick = () => {
        setCalc({sign: " ", num: 0, res: 0})
    }

    const handleClickButton = () => {
        const numberString = props.value.toString()

        let numberValue;
        if(numberString === "0" && calc.num === 0 ){
            numberValue = "0"
        } else {
            numberValue = Number(calc.num + numberString)
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }

    const handleButtonClick = () => {
        
        const result = {
            "." : commaClick,
            "C" : resetClick,
        }
        if(result[props.value]){
            return result[props.value]()
        } else {
            return handleClickButton()
        }
    }

    return(
        <button onClick={handleButtonClick}className={`${getStyleName(props.value)} button`}>{props.value}</button>
    )
}

export default Button