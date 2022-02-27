import styles from "./Card.module.css";

const CardNum = ({cardValue, setPickedNum, pickedValueAlt}) => {
    // console.log(randomCards)
    // const pickedCardValue = () => {
    //     setPickedNum(cardValue)
    // }

    const pickedCardValue = () => {
        pickedValueAlt(cardValue)
    }

    return(
        <p className={styles.card} onClick={pickedCardValue}>{cardValue}</p>
    );
}

export default CardNum;