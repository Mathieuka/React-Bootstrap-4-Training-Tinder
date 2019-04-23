import React from 'react';


const Section = (props) => {
    return ( 
        <section className={`bg-${props.color}`}>
            {props.children}
        </section>
     );
}
 
export default Section;