import React from "react";
// import UseState1 from "./Components/UseState1";
// import UseState2 from "./Components/UseState2";
// import UseEffect from "./Components/UseEffect1";
// import UseEffect2 from "./Components/UseEffect2";
// import UseEffect3 from "./Components/UseEffect3";
// import UseEffect4 from "./Components/UseEffect4";
// import UseEffect5 from "./Components/UseEffect5";
// import DataFetch from "./Components/DataFetch";
import UseContext from "./Components2/UseContext";

export const UserContext = React.createContext()
export const MyContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <UseState1/> */}
      {/* <UseState2 /> */}
      {/* <UseEffect /> */}
      {/* <UseEffect2/> */}
      {/* <UseEffect3 /> */}
      {/* <UseEffect4 /> */}
      {/* <UseEffect5 /> */}
      {/* <DataFetch /> */}

      <MyContext.Provider value={'jamrack'}>
        <UserContext.Provider value={'Erick'}>
          <UseContext />
        </UserContext.Provider>
      </MyContext.Provider>
    </div>
  );
}

export default App;
