import { BrowserRouter as Router } from 'react-router-dom';

function Root({ children }) {
  return (
    <Router basename='/globallogic-js-basecamp-2021/react/04-redux/build'>
      {children}
    </Router>
  );
}

export default Root;
