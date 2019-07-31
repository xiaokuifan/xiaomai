import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
class App extends Component {
  render() {
    return (
      <Router>
        {
          routes.map((r, ind) => {
            if (r.exact) {
              return <Route key={ind} path={r.path} component={r.component} exact />;
            }
            return <Route key={ind} path={r.path} component={r.component} />;
          })
        }
      </Router>
    );
  }
}

export default App;