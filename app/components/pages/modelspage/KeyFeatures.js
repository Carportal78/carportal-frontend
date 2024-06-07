import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';

const KeyFeatures = ({ features, modelName }) => {
  return (
    <>
     <h4>Key Features of {modelName}</h4>
      <div className="flex-nowrap overflow-auto" style={{ whiteSpace: 'nowrap' }}>
        {features?.map((feature, index) => (
          <div key={index} style={{ display: 'inline-block', marginRight: '10px', marginTop:'5px' }}>
            <Image width={100} height={100} src={feature?.image?.url} alt={feature?.image?.altText} />
            <p className='mt-3'>{feature.featureDescription}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default KeyFeatures;