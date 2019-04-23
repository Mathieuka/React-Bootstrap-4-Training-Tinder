import React from 'react';


const Footer = (props) => {
    return ( 
        <div className={`p-${props.padding} bg-${props.color} mt-${props.marginTop} text-${props.position} text-white`}>
            <div className={`mr-${props.textMarginRight}`}>{props.title}</div>
        </div>
     );
}
 
export default Footer;