import HelloReduxExampleComponent
    from "./ReduxExamples/components/HelloReduxExampleComponent";
import hello from "./ReduxExamples/reducers/hello";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import Todos from "./ReduxExamples/components/Todos";
import todos from "./ReduxExamples/reducers/todos";
import ReduxExamples from "./ReduxExamples/components";
import {Link} from "react-router-dom";
import APIExamples from "./APIExamples";
import MovieApiClient from "./APIExamples/MovieApiClient";
const reducers = combineReducers({hello, todos})
const store = createStore(reducers);

const Practice = () => {
    return(
        <Provider store={store}>
            <div>
                <h1>Practice</h1>
                <Link to="/a8/twitter/home">Build</Link>
                <MovieApiClient/>
                <APIExamples/>
                {/*<ReduxExamples/>*/}

            </div>
        </Provider>
    )
};

export default Practice;