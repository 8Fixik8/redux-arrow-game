import playgroundReducer, { initialState } from "../slices"

describe("initial state", () => {
  it("check initial state", () => {
    const state = playgroundReducer(undefined, { type: "inknown" })
    console.log(state)

    expect(state).toEqual(initialState)
  })
})
