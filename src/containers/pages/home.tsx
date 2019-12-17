import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../store/ducks/todo';
import TodoList from '../../components/page/home/TodoList';
import { Link } from 'react-router-dom';
import { AppState } from '../../store';

class Home extends React.Component<any, {}> {
  render() {
    return (
      <div>
        {this.props.todos.length > 0
          ? <TodoList list={this.props.todos} />
          : <p> Task list is empty. <Link to='/create-todo'> Add new </Link> </p>
        }
      </div>

    );
  }
}

// Map store state to component's props
const mapStateToProps = (state: AppState) => ({
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