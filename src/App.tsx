import React, { Suspense } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";

import { LightTheme, BaseProvider } from "baseui";
import { Spinner } from "baseui/spinner";

import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import TopNavbar from "./layout/TopNavbar";
import { routes } from "./app/routes";

const engine = new Styletron();

function App() {
  return (
    <Router>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <TopNavbar />
          <div className="App">
            <Suspense fallback={() => <Spinner />}>{routes}</Suspense>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Counter />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <span>
                <span>Learn </span>
                <a
                  className="App-link"
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
                <span>, </span>
                <a
                  className="App-link"
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux
                </a>
                <span>, </span>
                <a
                  className="App-link"
                  href="https://redux-toolkit.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redux Toolkit
                </a>
                ,<span> and </span>
                <a
                  className="App-link"
                  href="https://react-redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Redux
                </a>
              </span>
            </header>
          </div>
        </BaseProvider>
      </StyletronProvider>
    </Router>
  );
}

export default App;
