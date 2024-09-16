import styles from "./KeyPressed.module.css"

import { useCallback, useEffect } from "react"

import { setEnteredValue } from "../../store/slices"
import { MAP_ARROW_CODES } from "../../constants"
import { useAppDispatch } from "../../../../app/hooks"
import { useKeyPressedElement } from "./hooks"
import { TypographyHeader } from "../../../UI"
import TypographyText from "../../../UI/TypographyText"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const keyPressedElement = useKeyPressedElement()

  const dispatch = useAppDispatch()

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(event.key) && isTimerActive) {
        dispatch(setEnteredValue(event.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div>
      <TypographyHeader>Key Pressed</TypographyHeader>

      <div className={styles.container}>
        <TypographyText>
          Press the key corresponding to the key in "Random keys"
        </TypographyText>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.icon}>{keyPressedElement}</span>
      </div>
    </div>
  )
}

export default KeyPressed
