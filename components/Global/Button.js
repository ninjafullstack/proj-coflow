'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const Button = ({ value, btnClass, ...props }) => {
  const { pending } = useFormStatus();
  
  const btnClasses = ` ${btnClass}`.trim();
  
  return (
    <button className={`btn ${btnClasses}`} {...props} disabled={pending}>
      { pending ? 'Loading...' : value }
    </button>
  )
}

export default Button
