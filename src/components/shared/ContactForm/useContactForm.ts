import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!privacyAccepted) {
      alert('Debes aceptar la política de privacidad para continuar.');
      return;
    }

    setSubmitStatus('submitting');

    try {
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);
      
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setPrivacyAccepted(false);

      // Reset form status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
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
    submitStatus,
    setPrivacyAccepted,
    handleSubmit,
    handleChange
  };
}