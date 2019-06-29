import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addAuthorMutation } from '../queries/queries';

class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: ''
    };
  }

  submitAuthor(e) {
    e.preventDefault();
    // use the addAuthorMutation
    console.log(this.props.addAuthorMutation);
    // this.props.addAuthorMutation({
    //   variables: {
    //     name: this.state.name,
    //     age: this.state.age
    //   }
    // });
  }
  render() {
    console.log(this.props);
    return (
      <form id='add-Author' onSubmit={this.submitAuthor.bind(this)}>
        <h2>Add an Author</h2>
        <div className='field'>
          <label>Author:</label>
          <input
            type='text'
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className='field'>
          <label>Age:</label>
          <input
            type='number'
            onChange={e => this.setState({ age: e.target.value })}
          />
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(addAuthorMutation)(AddAuthor);
