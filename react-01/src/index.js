import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import StoreContext, {Provider} from "./StoreContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>
    );
};

rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
})
