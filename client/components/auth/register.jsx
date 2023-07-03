import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import codes from 'country-calling-code';
import Input from '../blocks/Input';
import Dropdown from '../blocks/Dropdown';
import config from '../../config';

function Register() {
  const [step, setStep] = useState(0);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const formatedData = codes.map((item) => ({
      ...item,
      label: item.country,
      value: item.country,
    }));
    setCountries(formatedData);
  }, []);

  const handleStep = () => {
    setStep(1);
  };

  const handleCountry = (label) => {
    setCountry(countries.find((item) => item.label === label));
    setPhoneCode(
      countries.find((item) => item.label === label).countryCodes[0]
    );
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div>
      {step === 0 && (
        <div>
          <Helmet>
            <title>{`Sign up - ${config.brandName}`}</title>
          </Helmet>
          {/* notice of terms */}
          <div className="mt-2 text-sm text-center text-[15px]">
            <p className="font-display text-spill-400">
              Read our&nbsp;
              <a href="/" className="text-sky-800 no-underline">
                Privacy Policy
              </a>
              . &nbsp; Tap &quot;Agree and Continue&quot;
            </p>
            <p className="text-center font-display text-spill-400">
              accept the&nbsp;
              <a href="/" className="text-sky-800 no-underline">
                Therms and Services
              </a>
            </p>
          </div>
          <button
            type="button"
            onClick={handleStep}
            className="mt-6 py-2 mx-auto px-14 w-fit flex justify-center font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
          >
            <p>AGREE AND CONTINUE</p>
          </button>
          <div className="pt-10">
            <p className="mt-4 text-center font-display text-spill-400">by</p>
            <p className="text-sky-800 text-center font-bold ">
              CHOC-CITY GROUP OF COMPANIES
            </p>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="">
          <p className="font-display text-center text-spill-400 text-[20px]">
            Verify your phone number
          </p>
          <p className="font-display text-center my-4 text-spill-400 text-md text-[20px]">
            iMax will need to verify your account.
          </p>
          <div className="w-full">
            <Dropdown
              options={countries}
              value={country.label}
              onChange={handleCountry}
            />
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="w-1/3">
              <div className="border-b py-2 px-2 text-spill-300 border-emerald-600">
                + {phoneCode}
              </div>
            </div>
            <div className="w-2/3">
              <Input
                type="number"
                value={phoneNumber}
                onChange={handlePhoneNumber}
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="button"
              onClick={handleStep}
              className="mt-6 py-2 mx-auto px-14 w-fit flex justify-center font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            >
              <p>Next</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
