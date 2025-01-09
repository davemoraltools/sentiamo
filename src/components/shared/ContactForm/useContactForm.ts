import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!privacyAccepted) {
      alert('Debes aceptar la política de privacidad para continuar.');
      return;
    }

    try {
      // Add form submission logic here
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setPrivacyAccepted(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return {
    formData,
    privacyAccepted,
    setPrivacyAccepted,
    handleSubmit,
    handleChange
  };
}