// import styles from "./WelcomeText.module.css"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  return (
    <>
      {!isTimerActive ? (
        <span>Press "Start" to start game</span>
      ) : (
        <span>loading</span>
      )}
    </>
  )
}

export default WelcomeText
