// src/components/ReCaptcha.tsx
import { RECAPTCHA_SITE_KEY_BY_PASS } from '@/config';
import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ReCaptchaProps {
  onVerify: (token: string) => void;
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({ onVerify }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (token: string | null) => {
    if (token) {
      onVerify(token);
    }
  };

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={RECAPTCHA_SITE_KEY_BY_PASS}
      onChange={handleChange}
    />
  );
};

export default ReCaptcha;
