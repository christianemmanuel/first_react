import React from "react";

class navigationFunction extends React.Component {

  state = {
    active: false
  }

  toggleMenu() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div>
        <div className="pos-f-t">
          <div className="collapse">
            <div className="bg-dark p-4">
              <h5 className="text-white h4">Collapsed content</h5>
              <span className="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" onClick={(this.toggleMenu.bind(this))}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>

        <aside className={this.state.active ? "menu menu-active" : "menu"}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laborum necessitatibus officia, qui asperiores maxime neque quod pariatur dicta porro doloribus et earum, nobis facere. Voluptate eligendi dicta aspernatur culpa?</p>
        </aside>

        <div className="card" style={{ width: "18rem", margin: "auto", marginTop: "20px" }}>
          <img src={require('../images/150.jpeg')} className="card-img-top" alt="Image" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

      </div>
    )
  }

}

export default navigationFunction;