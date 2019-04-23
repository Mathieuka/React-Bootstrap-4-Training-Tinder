import React from 'react';
import Section from '../../lib/section';



const SectionTopHome = (props) => {
    return ( 
        <Section>
            <h1 className='mx-auto text-center '> Numéro <span className='text-danger'>1</span> des</h1>
            <h1 className='text-center'> rencontres !</h1>
            <img src="https://believemy.com/uploads/9d68712374e3b4d98b40c9680ce71df1_0cbd495042b88ce8c3c3ac834da275a7.png"
            className='mx-auto mb-5 d-block'/>
        </Section>
     );
}
 
export default SectionTopHome;