import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { deleteTodo, Todo } from '../../../store/ducks/todo';
import { Container, Row, Col } from 'reactstrap';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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
    <Container>
      {
        list.map((t: Todo, index: number) =>
          <React.Fragment key={t.id}>
            <Row>
              <Col sm="10">
                <Paper className={classes.root}>
                  <Typography component="p">
                    {t.title}
                  </Typography>
                  <p> {t.description} </p>
                </Paper>
              </Col>
              <Row style={{ width: '25px' }}>
                <Col sm="12">
                  <Button color="primary" aria-label="add">
                    <EditIcon />
                  </Button>
                </Col>
                <Col sm="12">
                  <Button color="primary" aria-label="add" onClick={() => {dispatch(deleteTodo({ ...t, index,})) }} >
                    <DeleteIcon/>
                  </Button>
                </Col>
              </Row>
            </Row>
            <br></br>
          </React.Fragment>
        )
      }
    </Container>
  );
}
