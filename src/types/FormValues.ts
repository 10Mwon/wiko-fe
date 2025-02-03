export interface SignUpFormValues {
  name: string;
  nation: string;
  id: string;
  password: string;
  passwordConfirm: string;
  birth: string;
  phone: string;
  email: string;
  address: string;
  visa: string;
}

export interface PasswordInputProps {
  name: string;
  placeholder?: string;
  value?: string;
  isSignUp?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
