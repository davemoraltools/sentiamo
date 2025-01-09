import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormTouched {
  name?: boolean;
  email?: boolean;
  message?: boolean;
}

export function useForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [loading, setLoading] = useState(false);

  const validateField = (name: keyof FormData, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'El nombre es demasiado corto' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) 
          ? 'El email no es válido' 
          : '';
      case 'message':
        return value.length < 10 
          ? 'El mensaje debe tener al menos 10 caracteres' 
          : '';
      default:
        return '';
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name as keyof FormData, value)
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validar todos los campos
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(
        key as keyof FormData, 
        formData[key as keyof FormData]
      );
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    
    try {
      // Aquí iría la lógica de envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Resetear formulario
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
      setErrors({});
      
      alert('Mensaje enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    touched,
    loading,
    handleChange,
    handleSubmit
  };
}