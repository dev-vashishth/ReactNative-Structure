//Assets

import watchLogin from './LoginSaga';




//Main Root Saga
const rootSaga = function* rootSaga() {
    yield [
      watchLogin(),

    ]

    
    
  };
  
  export default rootSaga;
  