import "../styles.css";
import { useContext } from "react";
import { Store } from "../DataStore";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
const Home = () => {
  const [data] = useContext(Store);
  // console.log(Hdata);
  return (
    <>
      <div id="home">
        <NavBar />

        <div className="home_container">
          <Link to="/dynamicPage" state={{ index: 6 }}>
            <div className="box box1">
              <div className="text">
                Ganapath box office: Tiger and Kriti's film earns ₹1.5 cr on
                Dussehra holiday
              </div>
            </div>
          </Link>
          <div id="hm_cnt2">
            <Link to="/dynamicPage" state={{ index: 17 }}>
              <div className="box box2">
                <div className="sm-text">
                  Endpoint security in the cloud: What you need to know
                </div>
              </div>
            </Link>
            <Link>
              <div className="box box3">
                <div className="sm-text">
                  When Zerodha’s CEO Nithin Kamath shared the importance of
                  strength training: ‘Integral to increasing health span’
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* <br></br> */}
        <h1 className="topic_heading hm">The Latest</h1>
        {/* <br></br> */}
        <div className="home_latest">
          {data
            .filter((item) => {
              return item.id % 11 === 0;
            })
            .map((item, index) => {
              return (
                <div className="home_display_card" key={index}>
                  <Link to="/dynamicPage" state={{ index: item.id }}>
                    <div className="card_image">
                      {/* <img src={item.image} className="image_box" alt='not found'/> */}
                      <img
                        src={item.image}
                        className="image_box"
                        alt="not found"
                      />
                    </div>
                    <div className="card_content">
                      <h1>{item.heading.slice(0, 50) + " ..."}</h1>
                      <p>{item.discription.slice(0, 150) + " ..."}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="card_parent">
          <div className="card_container1">
            <h1 className="topic_heading ">Latest Articles</h1>
            {data
              .filter((item) => item.id % 8 === 0)
              .map((item, index) => {
                return (
                  <div className="display_card" key={index}>
                    <div className="card_image">
                      {/* <img src={item.image} className="image_box" alt='not found'/> */}
                      <Link to="/dynamicPage" state={{ index: item.id }}>
                        <img
                          src={item.image}
                          className="image_box"
                          alt="not found"
                        />
                      </Link>
                    </div>
                    <div className="card_content">
                      <h1>{item.heading.slice(0, 50) + " ..."}</h1>
                      <p>{item.discription.slice(0, 150) + " ..."}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="post_container">
            <h1 className="topic_heading">Top Posts</h1>

            <span>
              {data
                .filter((item) => {
                  return item.id % 14 === 0;
                })
                .map((item, index) => {
                  return (
                    <div className=" post_disp_crd" key={index}>
                      <div className="post_image_div">
                        <Link to="/dynamicPage" state={{ index: item.id }}>
                          {/* <img className='post_image' src={item.image}  alt='not found'/> */}
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
            </span>
            <div className="advertisement">
              <img
                className="Adds"
                src="https://mailbakery.s3.amazonaws.com/wp-content/uploads/2015/06/26160357/jack-spade.gif"
                alt="not found"
                width="400px"
                height="600px"
              />
            </div>
          </div>
        </div>
        <h1 className="topic_heading hm2">Latest Stories</h1>
        <div className="home_latest ">
          {data
            .filter((item) => item.id % 20 === 0)
            .map((item, index) => {
              return (
                <div className="card_content " key={index}>
                  <Link to="/dynamicPage" state={{ index: item.id }}>
                    <div className="hm_last">
                      <h1>{item.heading.slice(0, 40) + " ..."}</h1>
                      <p>{item.discription.slice(0, 350) + " ..."}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Home;
