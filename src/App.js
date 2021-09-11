import { useEffect, useState, createRef } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Showcase from "./components/Showcase";
import projects from "./assets/projects";
import Contacts from "./components/Contacts";
import { Switch, Route } from "react-router-dom";
import SingleBlog from "./components/SingleBlog";
import Blogs from "./pages/Blogs";

function App() {
  const mainRef = createRef();
  const [y, setY] = useState(0);

  useEffect(() => {
    const main = mainRef.current;
    setY(main.offsetTop);
  }, [mainRef]);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Header y={y} />
          <Showcase />
          <Projects projects={projects} ref={mainRef} />
          <About />
          <Contacts />
        </Route>
        <Route path="/blog" exact component={Blogs} />
        <Route path="/blog/:id" component={SingleBlog} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
