import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed? 'line-through' : 'none',
        }
        // if (this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through',
        //     }
        // }   else {
        //     return {
        //         textDecoration: 'none',
        //     }
        // }
    }

   

    render() {
        const {id,title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                 <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>{" "}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    border: 'none',
    padding: '5px 9px',
    color: '#fff',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

 /* /* <input type='checkbox' onChange={this.props.markComplete.bind(this, this.props.todo.id)}/>{" "}
                {this.props.todo.title} */

// Destructing id and title props */}
/* <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>{" "}, 
{title} */
export default TodoItem
