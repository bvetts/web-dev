import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes/index.js";
import Styles from "./styles/index.js";
import ConditionalOutput from "./conditional-output/index.js";
import TodoItem from "./todo/todo-item.js";
import TodoList from "./todo/todo-list.js";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
      <>
          <h1>Labs</h1>
          <TodoList/>
          <TodoItem/>
          <ConditionalOutput/>
          <Styles/>
          <Classes/>
          <ReduxExamples/>
          <Link to="/hello">
              Hello
          </Link> |
          <Link to="/tuiter">
              Tuiter
          </Link>
      </>

    )
};

export default Labs;



