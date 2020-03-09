import { connect } from "react-redux"
import App from "../components"
import {onClickAction} from "../actions"

const mapStateToProps = (state = {}, ownProps) => {
    console.log("mapStateToProps:state", state.clickReducer)
    return {
      text: ownProps.text,
      clickCount : state.clickReducer.clickCount
    }
}
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
            onClick: text => {
            console.log("mapDispatchToProps")
            return dispatch(onClickAction(text)) // this needs an object
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)