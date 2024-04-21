import './App.css';

import { Route, Switch } from "react-router-dom";

import singlePost from './components/Single-post/Single-post';
import Posts from './components/Posts/Posts';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Navbar from './components/Nav/Navbar'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Posts} path="/Posts" exact />
          <Route component={singlePost} path="/Posts/:postId" />
          <Route component={Contact} path="/Contact" />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
