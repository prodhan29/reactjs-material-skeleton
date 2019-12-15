import React from 'react';
import { connect } from 'react-redux';
import { createTodo, Todo } from '../../store/ducks/todo';
import TodoList from '../../components/page/home/TodoList';
import { Link } from 'react-router-dom';

class Home extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  createAction = () => {
    console.log("from create action");
    const task: Todo = {
      id: (new Date()).getTime(),
      title: 'Test 1',
      description: 'complete the react-reducer connection',
      index: -1,
    }
    this.props.createTodo(task);
  }

  render() {
    return (
      <div>
        {this.props.todos.length > 0 
        ? <TodoList list={this.props.todos} /> 
        : <p> Task list is empty. <Link to='/create-todo'> Add new </Link> </p>}
      </div>

    );
  }
}

// Map store state to component's props
const mapStateToProps = (state: any) => ({
  todos: state.todo.todos,
})

// Map store dispatch to component's props
const mapDispatchToProps = {
  createTodo,
}

// Connect home to redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);