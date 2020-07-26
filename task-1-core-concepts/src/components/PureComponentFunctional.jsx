import React from 'react'

function PureComponentFunction(props) {
    return <h1>Hello World</h1>;
  }

export default React.memo(PureComponentFunction);