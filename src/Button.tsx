import { ReactNode } from "react";

const Button = ({ disabled, children, onClick }: { disabled: boolean, children: ReactNode, onClick: () => void }) => {
  return (
    <button 
      style={{ backgroundColor: disabled ? 'red' : 'black', padding: '10px', borderRadius: '6px', color: 'white' }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;