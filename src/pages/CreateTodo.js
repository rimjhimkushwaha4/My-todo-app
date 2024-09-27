import React, { Component } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      isEditing: false,
    };
  }

  componentDidMount() {
    const { state } = this.props.location;
    if (state && state.task) {
      this.setState({
        taskName: state.task.name,
        isEditing: true,
        taskId: state.task.id,
      });
    }
  }

  handleChange = (e) => {
    this.setState({ taskName: e.target.value });
  };

  handleSubmit = () => {
    const { taskName, isEditing, taskId } = this.state;
    if (taskName.trim() === '') return;

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (isEditing) {
      tasks = tasks.map((task) =>
        task.id === taskId ? { ...task, name: taskName } : task
      );
    } else {
      const newTask = { id: Date.now(), name: taskName };
      tasks.push(newTask);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.props.navigate('/list');
  };

  render() {
    const { taskName, isEditing } = this.state;

    return (
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h5">
          {isEditing ? 'Update Task' : 'Create Task'}
        </Typography>
        <TextField
          label="Task Name"
          value={taskName}
          onChange={this.handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          {isEditing ? 'Update Task' : 'Add Task'}
        </Button>
      </Container>
    );
  }
}

function CreateTodoWithRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  return <CreateTodo navigate={navigate} location={location} />;
}

export default CreateTodoWithRouter;
