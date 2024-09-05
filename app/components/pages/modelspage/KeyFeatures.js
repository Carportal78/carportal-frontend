import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';

const KeyFeatures = ({ features, modelName }) => {
  return (
    <>
     <h4>Key Features of {modelName}</h4>
     <div className="flex overflow-x-auto whitespace-nowrap">
      {features?.map((feature, index) => (
        <div key={index} className="inline-block flex-shrink-0 mr-4 w-[100px]">
          <Image 
            width={100} 
            height={100} 
            src={feature?.image?.url} 
            alt={feature?.image?.altText} 
            className="w-full h-auto"
          />
          <p className="mt-2 text-sm whitespace-normal">{feature.featureDescription}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default KeyFeatures;