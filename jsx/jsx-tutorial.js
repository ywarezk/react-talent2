
//this
const h1 = <h1 id="stam" className="hello">hello world</h1>

// translates to this
var h1 = React.createElement("h1", {
    id: "stam",
    className: "hello"
  }, "hello world");