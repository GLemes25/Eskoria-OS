import { useState, useEffect } from 'react';

const ASCII_CHARS = '!@#$%&*?><+~^';

export function useAsciiMask(realValue: string) {
  const [maskedValue, setMaskedValue] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!realValue) {
        setMaskedValue('');
        return;
      }

      let newMask = '';
      for (let i = 0; i < realValue.length; i++) {
        newMask += ASCII_CHARS.charAt(Math.floor(Math.random() * ASCII_CHARS.length));
      }
      setMaskedValue(newMask);
    }, 50);

    return () => clearInterval(interval);
  }, [realValue]);

  return maskedValue;
}
