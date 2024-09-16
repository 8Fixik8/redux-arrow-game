import { ARR_ARROW_CODES } from "../../constants"
import playgroundReducer, {
  initialState,
  setCurrentStep,
  setSteps,
  setEnteredValue,
} from "../slices"

describe("reducer setEnteredValue", () => {
  it("check setEnteredValue", () => {
    const enteredValue = ARR_ARROW_CODES[0]

    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsState,
      setEnteredValue(enteredValue),
    )

    expect(setStepsState.steps[0].enteredValue).toEqual(null)
    expect(setEnteredValueState.steps[0].enteredValue).toEqual(enteredValue)
  })

  it("check totalSuccessful and totalUnsuccessful", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsState,
      setEnteredValue(setStepsState.steps[0].currentValue),
    )

    expect(setStepsState.totalSuccessful).toEqual(0)
    expect(setStepsState.totalUnsuccessful).toEqual(0)
    expect(setEnteredValueState.totalSuccessful).toEqual(1)
    expect(setEnteredValueState.totalUnsuccessful).toEqual(0)
  })
})
