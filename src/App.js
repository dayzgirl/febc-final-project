import './App.css';
import "react-toastify/dist/ReactToastify.css"

import { Route, Switch } from "react-router-dom";

import Home from './components/Home/Home';
import singlePost from './components/Single-post/Single-post';
import Posts from './components/Posts/Posts';
import Contact from './components/Contact/Contact';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className='App'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Posts} path="/Posts" exact />
          <Route component={singlePost} path="/Posts/:postId" />
          <Route component={Contact} path="/Contact" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
