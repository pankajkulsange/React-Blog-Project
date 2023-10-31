import React from "react";
import { Link } from "react-router-dom";
import rythm from "../assets/rythm.svg";
import share from "../assets/share.svg";
import User from "../assets/User.png";
import usericonimg from "../assets/user-icon-img.png";
import { Store } from "../DataStore";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
// import NavBar from "../NavBar";
// import { useEffect } from "react";
const DynamicComp = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = useContext(Store);
  // console.log("storedata", data);
  const id_value = useLocation().state.index;

  // console.log("hello" + id_value);
  const updatedData = data[0].filter((item) => item.id === id_value);
  // console.log(updatedData);
  return (
    <div>
      <Link to="/">
        <header className="heading">
          <div id="tittle">
            <span id="the">The</span>
            <span id="siren">Siren</span>
          </div>
          <button id="get_start">Get Started</button>
        </header>
      </Link>
      <div id="shareIcon">
        <div className="clap1">
          <img src={rythm} alt="not found" width="50px" height="50px" />
          <span>9.3k</span>
        </div>
        <div className="clap1">
          <img src={share} alt="not found" width="50px" height="50px" />
          <span>share this article</span>
        </div>
      </div>

      <div className="dynamic_comp">
        <div id="dynamic_comp_wrapper">
          <h1 id="dynamic_comp_heading">{updatedData[0].heading}</h1>
        </div>

        <div className="userIcon">
          <img
            id="box-icon-user"
            src={User}
            alt="not found"
            width="100px"
            height="100px"
          />
          <span>
            <b>Pankaj</b>
            <p>October 23 2023</p>
          </span>
          <img id="box-icon" src={usericonimg} alt="not found" height="60px" />
        </div>
        <div className="dynamic_img">
          <img id="dynamic_img" src={updatedData[0].image} alt="not found" />
        </div>

        <div className="dynamic_content">
          <h2>{updatedData[0].discription}</h2>
        </div>
        <div className="clap2">
          <img src={rythm} alt="not found" width="50px" height="50px" />
          <span>4.3k claps</span>
        </div>

        <div className="icon2">
          <img src={User} alt="not found" width="100px" height="100px" />
          <div>
            <span>Written by:</span>
            <br></br>
            <span>
              <b>Pankaj</b>
            </span>
            <br></br>
            <span>October 23 2023</span>
          </div>
        </div>
      </div>

      <div className="backgrd">
        <h1 className="topic_heading hm3  ">More From Siren</h1>
        <div className="more_from">
          {data[0]
            .filter((item) => {
              if (
                updatedData[0].category !== "technology" &&
                updatedData[0].category !== "fitness"
              )
                return (
                  item.category === updatedData[0].category && item.id % 4 === 0
                );
              else
                return (
                  item.category === updatedData[0].category && item.id % 5 === 0
                );
            })
            .map((item, index) => {
              return (
                <div className="home_display_card" key={index}>
                  <div className="card_image">
                    <Link to="/dynamicPage" state={{ index: item.id }}>
                      <img
                        src={item.image}
                        className="image_box"
                        alt="not found"
                      />
                    </Link>
                  </div>
                  <div className="card_content ">
                    <Link to="/dynamicPage" state={{ index: item.id }}>
                      <h1>{item.heading.slice(0, 50) + " ..."}</h1>
                    </Link>
                    <Link to="/dynamicPage" state={{ index: item.id }}>
                      <p>{item.discription.slice(0, 150) + " ..."}</p>
                    </Link>
                  </div>

                  <div className="icon2 more">
                    <img
                      src={User}
                      alt="not found"
                      width="100px"
                      height="100px"
                    />
                    <div>
                      <span>
                        <b>Pankaj</b>
                      </span>
                      <br></br>
                      <span>October 23 2023</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default DynamicComp;
