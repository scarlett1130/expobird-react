import React from 'react';
import Main from './Main'
import './App.css';
import './Responsive.css';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
    return (
      <HelmetProvider>
      <div className="App" id="main">
          <Main/>
          {/* <MessengerCustomerChat
          pageId="185506882345203"
          appId="363775251678392"
          /> */}
        </div>
      </HelmetProvider>
  );
}

export default App;
