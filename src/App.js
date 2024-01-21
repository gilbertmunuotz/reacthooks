import React, { useReducer } from "react";
import UseReducer1 from "./Components3/UseReducer1";
import UseReducer2 from "./Components3/UseReducer2";
import UseReducer from './Components3/UseReducer';
// import UseReducer from "./Components2/UseReducer";
// import UseState1 from "./Components/UseState1";
// import UseState2 from "./Components/UseState2";
// import UseEffect from "./Components/UseEffect1";
// import UseEffect2 from "./Components/UseEffect2";
// import UseEffect3 from "./Components/UseEffect3";
// import UseEffect4 from "./Components/UseEffect4";
// import UseEffect5 from "./Components/UseEffect5";
// import DataFetch from "./Components/DataFetch";
// import UseContext from "./Components2/UseContext";
// export const UserContext = React.createContext()
// export const MyContext = React.createContext()

export const MyContext = React.createContext()

const initialState = 0;

const reducerfn = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducerfn, initialState)

  return (
    <MyContext.Provider value={{ countState: state, countDispatch: dispatch }}>
      <div className="App">
        {/* <UseState1/> */}
        {/* <UseState2 /> */}
        {/* <UseEffect /> */}
        {/* <UseEffect2/> */}
        {/* <UseEffect3 /> */}
        {/* <UseEffect4 /> */}
        {/* <UseEffect5 /> */}
        {/* <DataFetch /> */}
        {/* 
      <MyContext.Provider value={'jamrack'}>
      <UserContext.Provider value={'Erick'}>
      <UseContext />
      </UserContext.Provider>
    </MyContext.Provider> */}
        {/* <UseReducer /> */}

        count : {state}

        <UseReducer />
        <UseReducer1 />
        <UseReducer2 />
      </div>
    </MyContext.Provider>
  );
}

export default App;