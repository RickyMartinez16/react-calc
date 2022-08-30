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

    const signClick = () =>  {
        setCalc({
            sign: props.value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }

    const equalsClick = () => {
        if(calc.res && calc.num){
            const math = ( a , b, sign) => {
                const result = {
                    "+" : (a, b) => a + b,
                    "-" : (a, b) => a - b,
                    "x" : (a, b) => a * b,
                    "/" : (a, b) => a / b,
                }
                return result[sign](a, b)
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: " ",
                num: 0
            })
        }
    }

    const percentClick = () => {
        setCalc({
            num: (calc.num / 100),
            res: (calc.res / 100),
            sign: " "
        })
    }

    const invertClick = () => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: " "
        })
    }

    const handleButtonClick = () => {
        
        const result = {
            "." : commaClick,
            "C" : resetClick,
            "/" : signClick,
            "x" : signClick,
            "-" : signClick,
            "+" : signClick,
            "=" : equalsClick,
            "%" : percentClick,
            "+-" : invertClick
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