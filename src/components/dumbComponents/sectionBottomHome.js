import React from 'react';
import Youtube from 'react-youtube';
import Section from '../../lib/section';

class SectionBottomHome extends React.Component {

   _onReady = (e) => {
      e.target.stopVideo();
   }

   render(){
      const opts = {
         height: '390',
         width: '640',
         playerVars: { // https://developers.google.com/youtube/player_parameters
           autoplay: 1
         }
       };
       
      return ( 
         <Section color='light'>
         <h1 className='text-center p-5'>Déja <span className='text-success'>20</span> millions de matchs !</h1>
               <div className='embed-responsive embed-responsive-16by9 w-50 mx-auto rounded-pill' >
                  <Youtube
                  videoId='zdef2anpd04'
                  opts={opts}
                  onReady={this._onReady}
                  />
               </div>
            
         </Section>
      );
   }
}
   
 
export default SectionBottomHome;