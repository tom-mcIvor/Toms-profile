import { RECEIVE_PLAYER } from '../../../action/tennis'

function tennisplayerfun(state = {}, action) {
  const { type, payload } = action

  if (type === RECEIVE_PLAYER) {
    return payload
  } else {
    return state
  }

  // switch (type) {
  //   case RECEIVE_POSTS:
  //     return payload
  //   default:
  //     return state
  // }
}

export default tennisplayerfun
