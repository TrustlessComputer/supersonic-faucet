// src/components/ReCaptcha.tsx
import { RECAPTCHA_SITE_KEY_BY_PASS, RECAPTCHA_SITE_KEY } from '@/config';
import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ReCaptchaProps {
  onVerify: (token: string) => void;
  onExpired: () => void;
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({ onVerify, onExpired }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (token: string | null) => {
    if (token) {
      onVerify(token);
    }
  };

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={RECAPTCHA_SITE_KEY}
      onExpired={onExpired}
      onChange={handleChange}
    />
  );
};

export default ReCaptcha;
