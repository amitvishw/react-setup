import React from 'react'

class App extends React.Component {

    render() {
        console.log("props", this.props)
        console.log("state", this.state)
        return <li onClick={() => this.props.onClick("This is the text")}>Click {this.props.clickCount}</li>
    }

}

export default App;