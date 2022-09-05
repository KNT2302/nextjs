import actions from "./Actions"

const reducer = (state, action) => {
  switch (action.type) {
    case actions.NOTIFY:
      return {
        ...state,
        notify: action.payload
      }
    case actions.AUTH:
      return {
        ...state,
        auth: action.payload
      }
    default:
      return state
  }
}

export default reducer
