import "./styles/base.css";
import "./styles/landing.css";
import "./styles/widgets.css";
import React from "react";
import unsplash from "./apis/unsplash";

import { ReactComponent as Logo } from "./icons/logo.svg";
import Weather from "./components/Weather";
import Links from "./components/Links";
import RedditContent from "./components/RedditContent";
import Time from "./components/Time";

const App = () => {
  // const [fetchedImg, setFetchedImg] = useState('');
  // useEffect(() => {
  //   const getImg = async () => {
  //     const response = await unsplash.get('/photos/random', {
  //       params: {
  //         orientation: 'landscape',
  //       },
  //     });
  //     setFetchedImg(response.data.urls.regular);
  //     console.log(response.data);
  //   };

  //   getImg();
  // }, []);

  return (
    <>
      <div
        // style={{
        //   backgroundImage: `linear-gradient(to top, #000000b4, #ffffff00), url(${fetchedImg})`,
        // }}
        className="landing"
      >
        <Logo className="logo" />
        <div className="main-text">
          <h1>Good morning</h1>
          <Weather />
          <Time />
        </div>
        <div className="widgets-container">
          <Links />
        </div>
      </div>
    </>
  );
};

export default App;
