import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from "./components/Card.js";
import { QueryClient, QueryClientProvider } from "react-query";
import Pagination from "./components/Pagination";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={"relative  max-w-md h-screen m-auto overflow-auto bg-black"}
      >
        <Router>
          <Switch>
            <Route path="/pokemon/:name" component={Card}/>
            <Route path="/" component={Pagination}/>
          </Switch>
        </Router>
      </div>
    </QueryClientProvider>
  );
}
export default App;
