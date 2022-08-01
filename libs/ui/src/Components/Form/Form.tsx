import styles from './Form.module.css';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

/* eslint-disable-next-line */
export interface FormProps {
  children: React.ReactNode;
}

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  type: string;
  valid?: boolean;
  className?: any;
  register?: any;
}

export interface TextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: any;
}
export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: any;
}

export function Form({ children, ...rest }: FormProps) {
  return <form>{children}</form>;
}

const Input = ({ valid, type, label, className, ...rest }: InputProps) => {
  return (
    <div className="relative w-full">
      {label && (
        <label
          className="absolute text-label -top-2 left-1 text-xs mx-2 px-2 bg-white"
          htmlFor=""
        >
          {label}
        </label>
      )}
      {valid && (
        <label className="absolute right-3 top-2 ">
          <CheckRoundedIcon className="text-white rounded-full p-1 bg-primary font-bold text-[18px]" />
        </label>
      )}
      <input
        type={type}
        className={`w-full ${valid ? 'border-primary' : ''} ${className}`}
        {...rest}
      />
    </div>
  );
};

const Textarea = ({ className, ...rest }: TextAreaProps) => {
  return (
    <div className="relative w-full">
      <label
        className="absolute text-label -top-3 left-1 text-base mx-2 px-2 bg-white"
        htmlFor=""
      >
        Order Comment
      </label>
      <textarea
        name="comment"
        placeholder="Type Here..."
        id="comment"
        rows={30}
        className={className}
      ></textarea>
    </div>
  );
};

Form.Input = Input;
Form.TextArea = Textarea;

export default Form;
