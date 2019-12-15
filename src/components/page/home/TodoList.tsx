import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import { useDispatch } from 'react-redux';
import { deleteTodo, Todo } from '../../../store/ducks/todo';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    boxShadow: '0 0 13px 0 rgba(82,63,105,.1)',
    textAlign: 'left',
    background: '#fff',
    border: '1px solid #fff',
    color: '#282a3c',

  },
}));

export default function TodoList(props?: any) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { list } = props;

  return (
    <React.Fragment>
      {
        list.map((t: Todo, index: number) =>
          <React.Fragment  key={t.id}>
            <Paper className={classes.root}>
              <Typography component="p">
                {t.title}
                  <RemoveCircle
                    onClick={() => {let _todo = {...t, index,}; dispatch(deleteTodo(_todo))}}
                    style={{ textAlign: 'right', color: 'red' }}/>
              </Typography>
              <p> {t.description} </p>
            </Paper>
            <br></br>
          </React.Fragment>
        )
      }
    </React.Fragment>
  );
}
