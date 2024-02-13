import React from "react";
//import PlatformCard from "../components/PlatformCard";
import HomeImg from "../images/home_pic.jpg";
import { FloatButton } from 'antd';
import Goals from "../pages/Goals";


const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${HomeImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <div>
    <div className="home"  style={backgroundImageStyle}>
       <div>
          <FloatButton.BackTop />
        </div>
      <div className="home home--display">
        <div className="home--img-group">
          <div className="home--brand">
            <p>tomorrow's looking great with</p>
            <h1>Saxena Perez</h1>
            
          </div>
        </div>
      </div>
    </div>
    <div><Goals/> </div>
    </div>
  );
};

export default Home;
