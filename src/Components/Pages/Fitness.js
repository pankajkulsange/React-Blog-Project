import React, { useContext } from "react";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import { Store } from "../DataStore";
const Fitness = () => {
  const [data] = useContext(Store);
  return (
    <div>
      <NavBar />
      <div className="card_parent">
        <div className="card_container1">
          <h1 className="topic_heading">Fitness</h1>
          {data
            .filter((item) => item.category === "fitness")
            .map((item, index) => {
              return (
                <div className="display_card" key={index}>
                  <div className="card_image">
                    <Link to="/dynamicPage" state={{ index: item.id }}>
                      <img
                        src={item.image}
                        className="image_box"
                        alt="not found"
                      />
                    </Link>
                  </div>
                  <div className="card_content">
                    <Link to="/dynamicPage" state={{ index: item.id }}>
                      <h1>{item.heading.slice(0, 50) + " ..."}</h1>
                    </Link>
                    <Link to="/dynamicPage" state={{ index: item.id }}>
                      <p>{item.discription.slice(0, 150) + " ..."}</p>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="post_container">
          <h1 className="topic_heading">Top Posts</h1>
          {data
            .filter((item) => {
              return item.category === "fitness" && item.id % 2 === 0;
            })
            .map((item, index) => {
              return (
                <div className=" post_disp_crd" key={index}>
                  <div className="post_image_div">
                    <Link to="/dynamicPage" state={{ index: item.id }}>
                      <img
                        className="post_image"
                        src={item.image}
                        alt="not found"
                      />
                    </Link>
                  </div>
                  <div className="post_content">
                    <Link to="/dynamicPage" state={{ index: item.id }}>
                      <h3>{item.heading.slice(0, 25) + " ..."}</h3>
                    </Link>
                    <Link to="/dynamicPage" state={{ index: item.id }}>
                      <p>{item.discription.slice(0, 100) + " ..."}</p>
                    </Link>
                  </div>
                </div>
              );
            })}
          <div className="advertisement">
            {/* <img className='Adds' src='https://mailbakery.s3.amazonaws.com/wp-content/uploads/2015/06/26160357/jack-spade.gif' alt="not found" width='400px' height='600px'/> */}
            <img
              className="Adds"
              src="https://mailbakery.s3.amazonaws.com/wp-content/uploads/2015/06/26160357/jack-spade.gif"
              alt="not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fitness;
