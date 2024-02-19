import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { useAtom } from 'jotai';
import Select from "react-select";
import statesCitiesList from '../../../../public/jsondata/state-and-city.json'
import { selectCarBrandAtom, selectCarModelAtom, selectCarVariantAtom } from '../../atoms/categoriesAtoms';
import { clearInterval } from 'timers';

const ContactDealer = ({ carModelDetails, carVariantsList, onCLickHideHeader }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isCityDisabled, setIsCityDisabled] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  // Ref for storing the interval ID
  const countdownIntervalRef = useRef();

  // Function to start the timer
  const startTimer = () => {
    // Reset the timer to 5 minutes
    setMinutes(5);
    setSeconds(0);

    // Clear any existing timer to prevent multiple intervals running
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }

    countdownIntervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          setMinutes(prevMinutes => {
            if (prevMinutes === 0) {
              clearInterval(countdownIntervalRef.current); // Stop the timer
              return 0; // Ensure minutes don't go negative
            }
            return prevMinutes - 1;
          });
          return 59; // Reset seconds to 59 as we decrease a minute
        }
      });
    }, 1000);
  };

  // Cleanup useEffect
  // useEffect(() => {
  //   // Cleanup function to clear the interval when the component unmounts or before a new interval starts
  //   return () => {
  //     if (countdownIntervalRef.current) {
  //       clearInterval(countdownIntervalRef.current);
  //     }
  //   };
  // }, []);



  // Formik setup
  const formik = useFormik({
    initialValues: {
      carBrand: carModelDetails?.carBrand?._id || '',
      carModel: carModelDetails?._id || '',
      carVariant: '',
      name: '',
      email: '',
      phoneNumber: '',
      otp: '',
      state: '',
      city: '',
      buyingPeriod: '',
      usage: ''
    },
    onSubmit: values => {
      console.log('Form data', values);
    },
  });

  useEffect(() => {
    const stateOptions = Object.keys(statesCitiesList).map(key => ({ value: key, label: key }));
    setStates(stateOptions);
  }, []);

  const handleSelectState = (selectedOption) => {
    setSelectedState(selectedOption);
    const cityOptions = statesCitiesList[selectedOption.value].map(city => ({ value: city.id, label: city.city }));
    setCities(cityOptions);
    setIsCityDisabled(false);
    formik.setFieldValue('state', selectedOption.value);
  };

  const handleSelectCity = (selectedOption) => {
    setSelectedCity(selectedOption);
    formik.setFieldValue('city', selectedOption.value);
  };

  const createOptionGroup = (data) => {
    const optionGroup = [];
    Object.keys(data).forEach(state => {
      data[state].forEach(city => {
        optionGroup.push({
          value: city.id,
          label: city.city,
        });
      });
    });
    return optionGroup;
  };

  const saveUserDetails = async () => {
    // Example API endpoint for saving user details
    const saveDetailsUrl = 'https://api.univolenitsolutions.com/v1/carcustomer/add/customer/for/65538448b78add9eaa02d417';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';

    try {
      const customer = {
        carBrand: carModelDetails?.carBrand?._id,
        carModel: carModelDetails?._id,
        username: formik.values.name,
        state: formik.values.state,
        city: formik.values.city,
        phoneNumber: formik.values.phoneNumber,
        buyingPeriod: formik.values.buyingPeriod,
        usage: formik.values.usage
      }
      const response = await fetch(saveDetailsUrl, {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer), // Sending all form values
      });

      const data = await response.json();

      if (data.statusCode === "10000") {
        // User details saved successfully
        setCurrentStep(3);
        onCLickHideHeader(true);
        // Optionally, redirect the user or reset the form here
      } else {
        // Handle failure to save details
        alert('Failed to save details. Please try again.');
      }
    } catch (error) {
      console.error('Error saving details:', error);
      alert('An error occurred while saving details. Please try again.');
    }
  };

  const verifyOtp = async () => {
    // Example API endpoint for OTP verification
    const otpVerifyUrl = 'https://api.univolenitsolutions.com/v1/carcustomer/api/verify-otp/for/65538448b78add9eaa02d417';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';

    try {
      const response = await fetch(otpVerifyUrl, {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formik.values.phoneNumber,
          otp: formik.values.otp,
        }),
      });

      const data = await response.json();
      if (data.statusCode === '10000') {
        // OTP verification successful
        setCurrentStep(2);
        // saveUserDetails(); // Call function to save user details
      } else {
        // Handle OTP verification failure
        alert('OTP verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('An error occurred during OTP verification. Please try again.');
    }
  };

  const sendOtp = async () => {
    const otpVerifyUrl = 'https://api.univolenitsolutions.com/v1/carcustomer/api/send-otp/for/65538448b78add9eaa02d417';
    const apiKey = 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj';
    try {
      const response = await fetch(otpVerifyUrl, {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formik.values.phoneNumber,
          otp: formik.values.otp,
        }),
      });

      const data = await response.json();

      if (data.statusCode === '10000') {
        // setCurrentStep(2);
        setOtpSent(true);
        startTimer();
        // OTP verification successful
        // saveUserDetails(); // Call function to save user details
      } else {
        // Handle OTP verification failure
        alert('OTP verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('An error occurred during OTP verification. Please try again.');
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      {currentStep === 1 && (
        <>
          <div className="mb-2">
            <label htmlFor="phoneNumber" className="form-label">Phone Number <span style={{ color: 'red' }}>*</span></label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </div>
          {otpSent && (
            <>
              <div>Please enter the OTP sent to your phone. You have {minutes}:{seconds < 10 ? `0${seconds}` : seconds} minutes to enter the OTP.</div>
              <div className="mb-2">
                <label htmlFor="otp" className="form-label">OTP <span style={{ color: 'red' }}>*</span></label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  pattern="\d*"
                  maxLength="6"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.otp}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={verifyOtp}
                disabled={
                  !formik.values.phoneNumber
                }
              >
                Next
              </button>
            </>
          )}
          {!otpSent && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={sendOtp}
              disabled={
                !formik.values.phoneNumber
              }
            >
              Submit
            </button>)}
        </>
      )}
      {currentStep === 2 && (
        <>
          <div className='mb-2'>
            <label htmlFor="state" className="form-label">State <span style={{ color: 'red' }}>*</span></label>
            <Select
              placeholder="Select State..."
              value={selectedState}
              onChange={handleSelectState}
              options={states}
              className="select2-selection"
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="city" className="form-label">City <span style={{ color: 'red' }}>*</span></label>
            <Select
              placeholder="Select City..."
              value={selectedCity}
              onChange={handleSelectCity}
              options={cities}
              className="select2-selection"
              isDisabled={isCityDisabled}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">Name <span style={{ color: 'red' }}>*</span></label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="mb-2 mr-sm-2">
            <label className="form-label">Buying Period</label>
            <select name="buyingPeriod" className="form-control" onChange={formik.handleChange} value={formik.values.buyingPeriod}>
              <option value="">Select Buying Period</option>
              <option value="15 Days">15 Days</option>
              <option value="16-20 Days">16-20 Days</option>
              <option value=">30 days">{">"} 30 Days</option>
              <option value="Not Decided">Not Decided</option>
            </select>
          </div>
          <div className="mb-2 mr-sm-2">
            <label className="form-label">Usage</label>
            <select name="usage" className="form-control" onChange={formik.handleChange} value={formik.values.usage}>
              <option value="">Select Usage</option>
              <option value="personal">Personal</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={saveUserDetails}
            disabled={
              !selectedState ||
              !selectedCity ||
              !formik.values.name.trim() ||
              !formik.values.phoneNumber ||
              !formik.values.buyingPeriod ||
              !formik.values.usage
            }
          >
            Submit
          </button>
        </>
      )}
      {currentStep === 3 && (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>
            Thank You!
          </h2>
          <p style={{ fontSize: '18px', fontFamily: 'Arial, sans-serif', lineHeight: '1.3em' }}>
            Thanks for showcasing your query. We will reach out soon.
          </p>
        </div>
      )}

    </form>
  );
};

export default ContactDealer;

