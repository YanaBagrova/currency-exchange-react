import { requestsAT } from '../actionTypes/requestsAT';

const requestsState = {
  requests: [],
}

export const requestsReducer = (state = requestsState, action) => {

  switch (action.type) {
    case requestsAT.ADD_REQUEST:
      const request = action.payload
      console.log('reducer 11111111111111111111111111111111111111', request)
      return { ...state, requests: [...state.requests, request] };

    default:
      return state
  }

}
