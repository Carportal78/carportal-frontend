import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';

const KeyFeatures = ({ features, modelName }) => {
  return (
    <>
     <h4>Key Features of {modelName}</h4>
     <div className="container-fluid px-0">
      <div className="row flex-nowrap overflow-auto gap-2">
        {features?.map((feature, index) => (
          <div key={index} className="col-4 col-md-3 col-lg-2 px-2">
            <div className="text-center">
              <Image 
                width={100} 
                height={100} 
                src={feature?.image?.url} 
                alt={feature?.image?.altText} 
                className="img-fluid mb-2"
              />
              <p className="small text-break mb-0">{feature.featureDescription}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .row::-webkit-scrollbar {
          display: none;
        }
        .row {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
    </>
  );
};

export default KeyFeatures;