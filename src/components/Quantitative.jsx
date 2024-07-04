import React from 'react';
import quantitative from '../data/quantitative';
import QuantitativeItem from './QuantitativeItem';

function Quantitative() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quantitative.map(project => (
               <QuantitativeItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   )
}

export default Quantitative;