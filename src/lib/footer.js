import React from 'react';


const Footer = (props) => {
    return ( 
        <div className={`p-${props.padding} bg-${props.color} mt-${props.marginTop} text-${props.position} font-weight-light font-italic text-white border-top border border-ligth`}>
            <div className={`mr-${props.textMarginRight}`}>{props.title}</div>
        </div>
     );
}
 
export default Footer;