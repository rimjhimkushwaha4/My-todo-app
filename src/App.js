// src/App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateTodoWithRouter from "./pages/CreateTodo";
import TodoListWithRouter from "./pages/TodoList";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateTodoWithRouter />} />
          <Route path="/list" element={<TodoListWithRouter />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
