import './styles/base.css';
import './styles/landing.css';
import './styles/widgets.css';
import React from 'react';
import unsplash from './apis/unsplash';

import { ReactComponent as Logo } from './icons/logo.svg';
import Weather from './components/Weather';
import Links from './components/Links';
import moment from 'moment';
import Time from './components/Time';
import { fromAuthCode } from 'snoowrap';

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
  const getGreeting = () => {
    '';
    const time = moment().format('LTS');
    console.log(time);
    const timeOfDay = time.charAt(time.length - 2);
    console.log(timeOfDay);
    switch (timeOfDay) {
      case 'A':
        return 'Morning';
      case 'P':
        if (time.charAt(0) < 5) {
          return 'Afternoon';
        } else return 'Evening';
    }
  };

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
          <h1>Good {getGreeting()}</h1>
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
