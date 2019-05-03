// index.js
import React from 'react';
import { render } from 'react-dom';

// components
import HeaderHome from './src/components/dumbComponents/headerHome';
import FooterHome from './src/components/dumbComponents/footerHome';
import SectionTopHome from './src/components/dumbComponents/sectionTopHome';
import SectionBottomHome from './src/components/dumbComponents/sectionBottomHome';

class Index extends React.Component{
    render(){
        return(
           <div>
                <HeaderHome/>
                <SectionTopHome/>
                <SectionBottomHome/>
                <FooterHome/>
           </div>
        )
    }
}

render(
      <Index/>,
      document.getElementById('root')
  )
  













