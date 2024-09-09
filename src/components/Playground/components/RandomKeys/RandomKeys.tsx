// import styles from "./RandomKeys.module.css"

import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import { setSteps } from "../../store/slices"
import { IMapArrCodes } from "../../types"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  // const {isTimerActive} = props

  const state = useAppSelector((state) => state.playground)

  console.log(state.steps)

  return (
    <div>
      {state.steps.map((step) => (
        <span key={step.step}>
          {MAP_ARROW_CODES[step.currentValue as keyof IMapArrCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomKeys
