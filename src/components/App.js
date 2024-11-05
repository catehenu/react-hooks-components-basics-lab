import React from "react";
// what are we missing here?
function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}
function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* Add the About component here */}
      <About />
    </div>
  );
}