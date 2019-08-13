import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ['My name is Trent', 'My name is Sydney', 'My name is Tray'],
      chirp: ''
    };
  }

  handleInputChange(e) {
    this.setState({
      chirp: e.target.value
    })
  }

  handleButtonClick(e) {
    e.preventDefault();
    // console.log(this.state.chirp)
    const messagesCopy = this.state.messages
    messagesCopy.unshift(this.state.chirp)
    this.setState({
      messages: messagesCopy,
      chirp: ''
    })
  }

  render() {
    return (
      <main className="container">
        <form className="form-group p-3 border border-dark shadow ">
          <input className='form-control my-1 p-1 shadow-sm' type="text" value={this.state.chirp} onChange={e => this.handleInputChange(e)} />
          <button className='btn btn-primary btn-block mt-3 shadow' onClick={e => this.handleButtonClick(e)} >Post</button>
        </form>
        <section className="row justify-content-center">
          {this.state.messages.map(message => {
            return (
              <article className="col-md-10">
                <div className="card shadow border border-dark rounded">
                  <div className="card-body">
                    <h3 className='card-title' > {message} </h3>
                  </div>
                </div>
              </article>
            )
          })}
        </section>

      </main>
    )
  }
}
export default App;


