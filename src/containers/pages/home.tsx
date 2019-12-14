import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Store, bindActionCreators, AnyAction, Dispatch } from 'redux';
import { createTodo, Todo } from '../../store/ducks/todo';

class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    createAction = () => {
        console.log("from create action");
        const task: Todo = {
            id: (new Date()).getTime(),
            title: 'Test 1',
            description: 'complete the react-reducer connection'
        }
        this.props.createTodo(task);
    }

    render() {
        return (
            <div>
                total todo {this.props.todos.length} ,
                <div onClick={this.createAction}> Add  </div>
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