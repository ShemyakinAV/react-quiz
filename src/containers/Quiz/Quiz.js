import React, {Component} from 'react'
import classes from './Quiz.css'

class Quiz extends Component {
  state = {
    quiz: []
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <h1>test</h1>
      </div>
    )
  }
}


export default Quiz