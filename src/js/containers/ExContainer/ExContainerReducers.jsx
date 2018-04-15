const initialState = {
    testInitalState: 'testing'  
  }
  
  export default function testReducer(state = initialState, action) {
  
      const { type, payload } = action;
      // console.log(type, payload)
  
      switch (type) {
          case 'LOGIN_FULFILLED':
              // console.log(payload.data.id,'SAUCY');
              return {
                  ...state,
                  userToken : payload.data.id,
                  userId: payload.data.userId
                
              }
            case 'LOG_INPUT':
              return {
                  ...state,
                  ...payload
              }
            default: {
              return state;
            }
          }
          }