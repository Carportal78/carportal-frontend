import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';

const KeyFeatures = ({ features, modelName }) => {
  return (
    <>
     <h4 className='mb-3'>Key Features of {modelName}</h4>
     <div className="container-fluid px-0">
  <div className="row flex-nowrap overflow-auto gap-2">
    {[...features]?.map((feature, index) => (
      <div key={index} className="col-6 col-md-4 col-lg-3 px-2 flex-shrink-0" style={{ maxWidth: '200px' }}>
        <div className="text-center">
          <div style={{ position: 'relative', width: '100%', height: '124px' }}>
            <Image 
              src={feature?.image?.url} 
              alt={feature?.image?.altText} 
              fill
              style={{ objectFit: 'cover' }}
              className="mb-2"
            />
          </div>
          <p className="small text-break mb-0 mt-3"  style={{ fontWeight: 'bold', color: 'black' }}>{feature.featureDescription}</p>
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