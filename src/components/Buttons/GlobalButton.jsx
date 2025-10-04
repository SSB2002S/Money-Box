import _default from "eslint-plugin-react-refresh";
import { useRef } from "react";

const Button = ({ title, icon, action, type }) => {
  const shouldLog = useRef(true);
  return (
    <button
      type={type}
      className='bg-emerald-600 text-white py-2 px-4 rounded transition hover:bg-emerald-700'
      onClick={() => (action ? action() : _default)}>
      <div className='flex items-center gap-x-1'>
        {title}
        {icon}
      {shouldLog.current =false}
      </div>
    </button>
  );
};

export default Button;
