import React from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/example">
            <Example />
          </Route>
          <Route path="/example/:id">
            <ExampleIdPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function ExampleIdPage() {
  let { id } = useParams()
  return <div>your id is {id}</div>
}

function Example() {
  return <div>send help</div>
}
