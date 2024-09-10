// import styles from "./RandomArrows.module.css"

import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IPlaygroundStepsState } from "../../../../store/types"
import { IMapArrCodes } from "../../../../types"

import styles from "./RandomArrows.module.css"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if (element.success && element.success !== null) {
      return styles.iconSuccess
    }
    if (!element.success && element.success !== null) {
      return styles.iconUnsuccess
    }

    return styles.icon
  }

  return (
    <div>
      {state.steps.map((step) => (
        <span key={step.step} className={getStylesRandomKeys(step)}>
          {MAP_ARROW_CODES[step.currentValue as keyof IMapArrCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
