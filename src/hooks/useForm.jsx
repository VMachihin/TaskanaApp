import { useCallback, useState } from 'react';
import { generateId } from '@/utils/generateId';

const initialState = {
  id: '',
  title: '',
  priority: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const useFormAndValidation = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const { value, name } = event.target;
    const currentValue = name === 'priority' ? +value : value;

    setValues({ ...values, id: generateId(), [name]: currentValue });
  };

  const resetForm = useCallback(() => {
    setValues(initialState);
  }, [setValues]);

  return {
    values,
    handleChange,
    resetForm,
    setValues,
  };
};
