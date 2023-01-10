import { fetchttennispplayer } from "../pages/api/tennisApi"

export const SHOW_ERROR = 'SHOW_ERROR'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const REQUEST_POSTS = 'REQUEST_POSTS'

export const RECEIVE_PLAYER = 'RECEIVE_PLAYER'
export const REQUEST_PLAYER = 'REQUEST_PLAYER'

// export function requestPosts() {
//   return {
//     type: REQUEST_POSTS,
//   }
// }

// export function receivePosts(posts) {
//   return {
//     type: RECEIVE_POSTS,
//     payload: posts.map((post) => post.data),
//   }
// }

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

// export function fetchPosts(subreddit) {
//   return (dispatch) => {
//     dispatch(requestPosts())
//     fetchSubreddit(subreddit)
//       .then((posts) => {
//         dispatch(receivePosts(posts))
//       })
//       .catch((err) => {
//         dispatch(showError(err.message))
//       })
//   }
// }

export function requestPlayer() {
  return {
    type: REQUEST_PLAYER,
  }
}

export function receivePlayer(player) {
  return {
    type: RECEIVE_PLAYER,
    payload: player,
  }
}

export function fetchPlayer(name) {
  return (dispatch) => {
    dispatch(requestPlayer())
    fetchttennispplayer(name)
      .then((person) => {
        console.log(person)
        dispatch(receivePlayer(person))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}