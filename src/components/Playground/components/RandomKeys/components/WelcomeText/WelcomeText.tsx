import styles from "./WelcomeText.module.css"
import stylesCommon from "../../RandomKeys.module.css"

import TypographyText from "../../../../../UI/TypographyText"
import cn from "classnames"

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
        <div className={stylesCommon.wrapper}>
          <span className={cn(stylesCommon.icon, styles.loader)}></span>
        </div>
      )}
    </>
  )
}

export default WelcomeText
