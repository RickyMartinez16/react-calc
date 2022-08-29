import { createContext, useState } from "react"

export const CalcContext = createContext()

function CalcProvider({children}){

    const [calc, setCalc] = useState({
        sign: "",
        number: 0,
        res: 0
    })

    const providerValue = {
        calc, setCalc
    }

    return(
        <div>
            <CalcContext.Provider value={providerValue}>
                {children}
            </CalcContext.Provider>
        </div>
    )
}

export default CalcProvider