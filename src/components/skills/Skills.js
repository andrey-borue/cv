import React from 'react';
import './Skills.css';

export default class Skills extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div id="skills">
        <div className="card-group">
          <div className="card">
            <img className="card-img-top" src="/img/logo-docker-horizontal.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
          </div>
          <div className="card">
            <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
