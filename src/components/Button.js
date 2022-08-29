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

    return(
        <button className={`${getStyleName(props.value)} button`}>{props.value}</button>
    )
}

export default Button