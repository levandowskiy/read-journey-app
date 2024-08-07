import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface IAuthInputProps {
  type: string;
  validation: Object;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  value: string;
  placeholder: string;
}
