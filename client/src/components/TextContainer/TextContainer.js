import React from 'react';

import onlineIcon from "../icons/onlineIcon.png";

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h2>Realtime Chat Application! <span role="img" aria-label="emoji">💬</span></h2>
      <h3>Created with React, Express, Node and Socket.IO.</h3>
    </div>
    {
      users
        ? (
          <div>
            <h2>People currently online:</h2>
            <div className="activeContainer">
              <h3>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h3>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;