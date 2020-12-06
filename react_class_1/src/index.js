console.log("ghabrana ni ha");

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

// const div = document.createElement('div')
// const h = document.createElement('h1')
// h.innerHTML='Hammad'
// div.append(h)

// div ={
//     tagName:'div',
//     value:'hammad'
// }

const Header = () => {
  return (
    <div>
      <div>
        <h3>React E-commerce Store</h3>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <div>
        <h3>My Item goes here</h3>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div>
        <h6>My Contact detail goes here</h6>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
