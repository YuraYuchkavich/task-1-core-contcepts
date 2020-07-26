import React from 'react';

class CreateElementComponent extends React.Component {
  render() {
    const CreateElement = React.createElement('h1', {}, 'Hello World');
    
    return CreateElement;
  }
}

export default CreateElementComponent