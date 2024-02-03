import React, { useEffect, useState } from 'react';

const ContactDealer = ({ carModelDetails }) => {

  const [currentStep, setCurrentStep] = useState(1);
  const [carBrands, setCarBrands] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [carVariants, setCarVariants] = useState([]);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [formData, setFormData] = useState({
    carBrand: carModelDetails?.carBrand?.brandName,
    carModel: 'Hyundai',
    carVariant: '',
    name: '',
    email: '',
    phoneNumber: '',
    city: 'New Delhi',
    buyingPeriod: '6 days',
    usage: '',
    panDetails: ''
  });

  useEffect(() => {
    if (carModelDetails?.carBrand?.brandName) {
      setFormData(prevFormData => ({
        ...prevFormData,
        carBrand: carModelDetails.carBrand.brandName,
      }));
    }

    if(carModelDetails?.modelName) {
      setFormData(prevFormData => ({
        ...prevFormData,
        carModel: carModelDetails?.modelName,
      }));
    }
  }, [carModelDetails]);

  useEffect(() => {
    // Fetch car brands
    fetchCarBrands();

  }, []);

  useEffect(() => {
    // Fetch car models based on selected brand
    if (formData.carBrand) {
      fetchCarModels(formData.carBrand);
    }
  }, [formData.carBrand]);

  useEffect(() => {
    // Fetch car variants based on selected model
    if (formData.carModel) {
      fetchCarVariants(formData.carModel);
    }
  }, [formData.carModel]);

  const fetchCarBrands = async () => {
    // setIsBrandsLoading(true);
    const apiUrl = 'https://api.univolenitsolutions.com/v1/automobile/get/carbrands/for/65538448b78add9eaa02d417';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj'; // Replace with your actual API key

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.carBrandsList) {
          setCarBrands(data.data.carBrandsList);
          console.log('data.data.carBrandsList ', data.data.carBrandsList);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
    // .finally(() => setIsBrandsLoading(false));
  };

  const fetchCarModels = async (brandId) => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    if (brandId) {
      fetch(`https://api.univolenitsolutions.com/v1/automobile/get/carmodels/${brandId}/for/65538448b78add9eaa02d417`,
        {
          method: 'GET',
          headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data && data.data && data.data.carModelsList) {
            setCarModels(data.data.carModelsList);
          }
        })
        .catch(error => {
          console.error('Error fetching car models: ', error);
        })
    };
  }

  const fetchCarVariants = async (modelId) => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    const url = `https://api.univolenitsolutions.com/v1/automobile/carvariants/from/carmodel/${modelId}/for/65538448b78add9eaa02d417`;
    if (brandId) {
      fetch(url,
        {
          method: 'GET',
          headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data && data.data && data.data.carVariantList) {
            setCarVariants(data.data.carVariantList);
          }
        })
        .catch(error => {
          console.error('Error fetching car models: ', error);
        })
    };
  };

  const handleNext = async (e) => {
    e.preventDefault();
    if (currentStep === 2) {
      await sendOTP(formData.phoneNumber);
      if (otpSent) setCurrentStep(currentStep + 0.5);
    } else if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    if(currentStep == 2.5) {
      setCurrentStep(1);
    }
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to send OTP
  const sendOTP = async (phoneNumber) => {
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    fetch('https://api.univolenitsolutions.com/v1/automobile/carvariants/from/carmodel/${modelId}/for/65538448b78add9eaa02d417', {
      method: 'POST',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
    setOtpSent(true);
  };

  // Function to verify OTP
  const verifyOTP = async () => {
    setCurrentStep(3);
  };

  return (
    <form>
      {currentStep === 1 && (
        <>
          {/* Car Brand */}
          <div className="mb-2">
            <label className="form-label">Car Brand</label>
            <select name="carBrand" className="form-control" onChange={handleChange} value={formData.carBrand}>
              <option value="">Select Brand</option>
              {carBrands?.map(brand => <option key={brand._id} value={brand._id}>{brand.brandName}</option>)}
            </select>
          </div>

          {/* Car Model */}
          <div className="mb-2">
            <label className="form-label">Car Model</label>
            <select name="carModel" className="form-control" onChange={handleChange} value={formData.carModel} disabled={!formData.carBrand}>
              <option value="">Select Model</option>
              {carModels?.map(model => <option key={model._id} value={model._id}>{model.modelName}</option>)}
            </select>
          </div>

          {/* Car Variant */}
          <div className="mb-2">
            <label className="form-label">Car Variant</label>
            <select name="carVariant" className="form-control" onChange={handleChange} value={formData.carVariant} disabled={!formData.carModel}>
              <option value="">Select Variant</option>
              {carVariants?.map(variant => <option key={variant._id} value={variant._id}>{variant.variantName}</option>)}
            </select>
          </div>

          <button className="btn btn-thm" onClick={handleNext}>Next</button>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div className="mb-2 mr-sm-2">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" onChange={handleChange} value={formData.name} />
          </div>
          <div className="mb-2 mr-sm-2">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} />
          </div>
          <div className="mb-2 mr-sm-2">
            <label className="form-label">Phone Number</label>
            <input type="text" name="phoneNumber" className="form-control" onChange={handleChange} value={formData.phoneNumber} />
          </div>
          <button className="btn btn-thm mt5" onClick={handleBack}>Back</button>
          <button className="btn btn-thm mt5 ml10" onClick={handleNext}>Next</button>
        </>
      )}

      {currentStep === 2.5 && (
        <>
          <div className="mb-2 mr-sm-2">
            <label className="form-label">Enter OTP</label>
            <input type="text" name="otp" className="form-control" onChange={(e) => setOtp(e.target.value)} value={otp} />
            {otpError && <div className="text-danger">{otpError}</div>}
          </div>
          <button className="btn btn-thm mt5" onClick={handleBack}>Back</button>
          <button className="btn btn-thm mt5 ml10" onClick={verifyOTP}>Verify OTP</button>
        </>
      )}

      {currentStep === 3 && (
        <>
          <div className="mb-2 mr-sm-2">
            <label className="form-label">City</label>
            <input type="text" name="city" className="form-control" onChange={handleChange} value={formData.city} />
          </div>
          <div className="mb-2 mr-sm-2">
            <label className="form-label">Buying Period</label>
            <input type="text" name="buyingPeriod" className="form-control" onChange={handleChange} value={formData.buyingPeriod
            } />
          </div>
          <div className="mb-2 mr-sm-2">
            <label className="form-label">Usage</label>
            <select name="usage" className="form-control" onChange={handleChange} value={formData.usage}>
              <option value="">Select Usage</option>
              <option value="personal">Personal</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div className="mb-2 mr-sm-2">
            <label className="form-label">PAN Details</label>
            <input type="text" name="panDetails" className="form-control" onChange={handleChange} value={formData.panDetails} />
          </div>
          <button className="btn btn-thm mt5" onClick={handleBack}>Back</button>
          <button className="btn btn-thm mt5 ml10" onClick={handleSubmit}>Submit</button>
        </>
      )}  {/* Additional steps if any */}
    </form>
  );
};

export default ContactDealer;