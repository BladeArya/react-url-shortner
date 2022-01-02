import React,{useState} from 'react';
import shrtcode from "./api/shrtcode";
import DisplayUrl from './components/DisplayUrl';
import './App.css';

import Navigation from './components/Navigation';
import UrlSubmit from './components/UrlSubmit';
import Footer from './components/Footer';

function App() {
  const [shortURL, setShortURL] = useState("");

  const getLink = async (link,setIsLoading) => {
    await shrtcode
      .get(`shorten?url=${link}`)
      .then((response) => {
        setShortURL(response.data.result.full_short_link);
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        alert(error)
      });
  };
  const getLinkHandler = (link, setIsLoading) => {
    getLink(link, setIsLoading);

  };

  return (
    <div className="App">
      <Navigation/>
      <UrlSubmit getUrlLink={getLinkHandler} setShortURL={setShortURL} shortURL={shortURL}/>
      {/*shortURL && <DisplayUrl shortURL={shortURL}/>*/}
      <DisplayUrl shortURL={shortURL}/>
      <Footer/>
    </div>
  );
}

export default App;
