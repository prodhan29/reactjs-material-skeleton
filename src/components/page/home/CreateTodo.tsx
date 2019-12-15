import React, { useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Todo, createTodo } from '../../../store/ducks/todo';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { useHistory } from "react-router-dom";
import SnackbarContentWrapper from '../../commons/Snackbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 400,
      },
    },
  }),
);

const initialTodo: Todo = {
  id: new Date().getTime(),
  title: '',
  description: '',
  index: -1,
}

export default function CreateTodo() {
  const classes = useStyles();
  const [todo, setTodo] = useState(initialTodo);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const submit = () => {
    dispatch(createTodo(todo));
    setTodo(initialTodo);
    showSuccess();
    // history.push('/');
    
  }

  const showSuccess = () => {
    setOpen(true);
  };

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Title"
        variant="outlined"
        value = {todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <br></br>
      <TextField
        id="filled-basic"
        label="Description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
      <br></br>
      <Button variant="contained" color="primary" onClick={submit}>
        Create
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        onExit={()=> history.push('/')}
      >
        <SnackbarContentWrapper
          onClose={handleClose}
          variant="success"
          message="Successfully created a task"
        />
      </Snackbar>
    </form>
  );
}