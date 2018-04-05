import React from 'react';

export default () => {
  return (
    <div className="no-recent-logins">
      <h2>Connect with friends and the world around you on Thoughtbook.</h2>
      <div className="intro-feature-box">
        <div className="img-box">
          <div id="main1" />
        </div>
        <h4>{'See photos and updates'}</h4>
        <p>{'from friends in News Feed.'}</p>
      </div>
      <div className="intro-feature-box">
        <div className="img-box">
          <div id="main2" />
        </div>
        <h4>{"Share what's new"}</h4>
        <p>{'in your life on Timeline.'}</p>
      </div>
      <div className="intro-feature-box">
        <div className="img-box">
          <div id="main3" />
        </div>
        <h4>{'Find more'}</h4>
        <p>{"of what you're looking for with Thoughtspot Search."}</p>
      </div>
    </div>
  );
};
