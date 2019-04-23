import React from 'react';
// import { Button } from 'react-bootstrap';
import YouTube from 'react-youtube';


class Section extends React.Component{
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.stopVideo();
      }

    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
          };

        return(
            <div>
               <h1 className='mt-5  text-center '>Bienvenue</h1>
                <p className="p-3 w-25 mx-auto bg-danger text-white overflow-auto  " style={{height:10}}>Ce site est en construction</p>
                <img className="m-5 w-50 mx-auto d-block shadow-lg rounded-pill"  src='https://images.ladepeche.fr/api/v1/images/view/5c2d22613e45466a39683557/large/image.jpg'/>
                <h2 className='m-3 text-center  '>Vidéo</h2>
                <div className='embed-responsive embed-responsive-16by9 w-50 mx-auto '> 
                <YouTube
                className='mx-auto d-block embed-responsive-item  '
                    videoId="2xYKXFfaxRI"
                     opts={opts}
                     onReady={this._onReady}
                    />
                </div>
            </div>
        )
    }
}

export default Section;










