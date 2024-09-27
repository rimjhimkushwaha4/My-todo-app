import React, { Component } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.setState({ tasks });
  }

  handleEdit = (task) => {
    this.props.navigate("/", { state: { task } });
  };

  handleDelete = (taskId) => {
    const tasks = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  render() {
    const { tasks } = this.state;

    return (
      <Container style={{ marginTop: "20px" }}>
        <Typography variant="h5">Todo List</Typography>
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id} divider>
              <ListItemText primary={task.name} />
              {/* Edit Icon */}
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => this.handleEdit(task)}
              >
                <EditIcon />
              </IconButton>
              {/* Delete Icon */}
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => this.handleDelete(task.id)}
              >
                <DeleteIcon color="error" />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}

function TodoListWithRouter() {
  const navigate = useNavigate();
  return <TodoList navigate={navigate} />;
}

export default TodoListWithRouter;
