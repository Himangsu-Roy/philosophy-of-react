

const OddOrEven = ({props, pickedNum}) => {
    // console.log(props)
    return(
        <div>
            <p>odd or Even</p>
            {/* <p>{props % 2 === 0 ? 'Even' : 'Odd'}</p> */}
            <p>{pickedNum % 2 === 0 ? "Even" : "Odd"}</p>
        </div>
    )
}

export default OddOrEven;