import React from 'react';
import { User, Mail, MessageSquare } from 'lucide-react';
import { useForm } from './useForm';
import Input from './Input';
import TextArea from './TextArea';
import SubmitButton from './SubmitButton';

export default function Form() {
  const { 
    formData, 
    errors, 
    touched,
    loading,
    handleChange, 
    handleSubmit 
  } = useForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contenedor para los campos en línea */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          name="name"
          type="text"
          label="Nombre"
          icon={User}
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          touched={touched.name}
          required
        />

        <Input
          name="email"
          type="email"
          label="Email"
          icon={Mail}
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          touched={touched.email}
          required
        />
      </div>

      <TextArea
        name="message"
        label="Mensaje"
        icon={MessageSquare}
        placeholder="Cuéntanos tu historia..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        touched={touched.message}
        required
      />

      <SubmitButton loading={loading}>
        Enviar mensaje
      </SubmitButton>
    </form>
  );
}