import { requestsAT } from '../actionTypes/requestsAT'

export const requestsAC = (payload) => {
  return {
    type: requestsAT.ADD_REQUEST,
    payload
  }
}
