// index.js
import React from 'react';
import { render } from 'react-dom';
import Header from './src/components/container/header';
import Section from './src/components/container/section';
import Footer from './src/components/container/footer';


class App extends React.Component{

    render(){
        return(
            <div >
                <Header/>
            <div className="container">
                <Section/>
            </div>
                <Footer/>
            </div>
        )
    }
}

render(
      <App/>,
      document.getElementById('root')
  )
  













