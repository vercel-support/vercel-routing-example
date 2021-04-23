import React from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/example">
            <Example />
          </Route>
          <Route path="/example/:id">
            <ExampleIdPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function ExampleIdPage() {
  let { id } = useParams()
  return <div>your id is {id}</div>
}

function Example() {
  return <div>CRA App</div>
}
