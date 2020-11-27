import React from 'react';
import Directory from '../../components/Menu-Item/Directory/Directory.component';
import "./Homepage.styles.scss";

const Homepage = (props) => {
  return (
    <div className="homepage">
      <Directory/>
    </div>
  );
}

export default Homepage;