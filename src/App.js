// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import {BrowserRouter, Route} from "react-router-dom";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import A6Practice from "./components/a6/Practice";
import A6Build from "./components/a6/Build";
import {combineReducers, createStore} from "redux";
import who from "./reducers/who";
import tweets from "./reducers/tweets";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                {/*<Route path={["/", "/a6", "/a6/practice"]} exact={true}>*/}
                {/*    <Practice/>*/}
                {/*</Route>*/}
                {/*<Route path="/a6/build" exact={true}>*/}
                {/*    <Index/>*/}
                {/*</Route>*/}
                {/*<Route path="/a6/twitter/home" component={HomeScreen}/>*/}
                {/*<Route path="/a6/twitter/explore" component={ExploreScreen}/>*/}
                <Route path={["/a6", "/a6/practice"]} exact={true}>
                    <A6Practice/>
                </Route>
                <Route path="/a6/twitter">
                    <A6Build/>
                </Route>
                <Route path={["/a7", "/a7/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/twitter">
                    <Build/>
                </Route>
            </div>
            {/*<Route path="/a7/twitter">*/}
            {/*    <Index/>*/}
            {/*</Route>*/}
        </BrowserRouter>

    );
}

export default App;
