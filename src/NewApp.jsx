import React, { Component } from 'react';

class NewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          Name: 'Trent',
          Occupation: 'I am a Student at Covalence'
        },
        {
          Name: 'Sydney',
          Occupation: 'I am a client rep at ESS'
        },
        {
          Name: 'Luke',
          Occupation: 'I am an instructor at Covalence'
        }
      ],
      nameChirp: '',
      occupationChirp: ''
    };
  }

  handleInputChange2(e) {
    this.setState({
      nameChirp: e.target.value
    })
  }

  handleInputChange(e) {
    this.setState({
      occupationChirp: e.target.value
    })
  }

  handleButtonClick(e) {
    e.preventDefault();
    const newChirp = [{
      Name: this.state.nameChirp,
      Occupation: this.state.occupationChirp
    }]
    this.setState({
      messages: [newChirp, ...this.state.messages],
      nameChirp: '',
      occupationChirp: ''
    })
  }

  render() {
    return (
      <main className="container">
        <form className="form-group p-3 border border-dark shadow " >
          <input className='form-control my-1 p-1 shadow-sm' type='text' placeholder='Name' value={this.state.nameChirp} onChange={e => this.handleInputChange2(e)} />
          <input className='form-control my-1 p-1 shadow-sm' type="text" placeholder='Occupation' value={this.state.occupationChirp} onChange={e => this.handleInputChange(e)} />
          <button className='btn btn-primary btn-block mt-3 shadow' onClick={e => this.handleButtonClick(e)} >Post</button>
        </form>
        <section className="row justify-content-center">
          {this.state.messages.map(message => {
            return (
              <>
                <article className="col-md-10">
                  <div className="card shadow border border-dark rounded">
                    <div className="card-body">
                      <h3 className='card-title' > {message.Name} </h3>
                      <h3 className='card-title' > {message.Occupation} </h3>
                    </div>
                  </div>
                </article>
              </>
            )
          })}
        </section>
      </main>
    )
  }
}

export default NewApp;