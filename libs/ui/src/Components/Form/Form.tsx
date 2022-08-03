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
  divWidth?: string;
  className?: any;
  register?: any;
  labelBg?: any;
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

const Input = ({
  valid,
  type,
  label,
  labelBg,
  className,
  divWidth,
  ...rest
}: InputProps) => {
  return (
    <div className={`relative ${divWidth ? divWidth : 'w-full'}`}>
      {label && (
        <label
          className={`absolute text-label -top-2 left-1 text-xs mx-2 px-2 ${
            labelBg ? labelBg : 'bg-white'
          }`}
          htmlFor=""
        >
          {label}
        </label>
      )}
      {valid && (
        <label className="absolute right-3 top-4 ">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="7" fill="#1660CF" />
            <path d="M4 7.91638L6.08398 10L10 5" stroke="white" />
          </svg>
        </label>
      )}
      <input
        type={type}
        className={`-z-10 w-full ${valid ? 'border-primary' : ''} ${className}`}
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
