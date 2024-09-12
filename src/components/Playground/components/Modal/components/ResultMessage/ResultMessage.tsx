import styles from "./ResultMessage.module.css"

import TypographyText from "../../../../../UI/TypographyText"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>
          You win! Congratulations! <br /> You know how to click on the arrows.
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          You lost such an easy game. <br /> What a shame.
        </TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
