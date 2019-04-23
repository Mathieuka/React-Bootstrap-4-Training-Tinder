import React from 'react';

const Header = (props) => {
    return (
        <div className={`p-${props.padding} bg-${props.color} mb-${props.marginBottom} text-white sticky-top`}>
            <img src={props.source} style={{height :`${props.height}`}} className={`ml-${props.marginLeft}`}/>
        </div>
      );
}
 
export default Header;