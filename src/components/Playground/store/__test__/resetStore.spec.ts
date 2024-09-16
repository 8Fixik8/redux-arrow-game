import playgroundReducer, {
  initialState,
  setCurrentStep,
  resetStore,
} from "../slices"

describe("reducer resetStore", () => {
  it("check sresetStore", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const resetStoreState = playgroundReducer(setCurrentStepState, resetStore())

    expect(initialState).toEqual(resetStoreState)
  })
})
