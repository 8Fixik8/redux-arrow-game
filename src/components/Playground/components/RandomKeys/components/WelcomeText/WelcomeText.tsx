// import styles from "./WelcomeText.module.css"

import TypographyText from "../../../../../UI/TypographyText"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  return (
    <>
      {!isTimerActive ? (
        <TypographyText>Press "Start" to start game</TypographyText>
      ) : (
        <span>loading...</span>
      )}
    </>
  )
}

export default WelcomeText
