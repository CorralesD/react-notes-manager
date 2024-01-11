import s from './style.module.css';

export const ButtonPrimary = ({ children, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type='button'
        className={`btn btn-primary ${s.button}`}
      >
        {children}
      </button>
    </div>
  );
};
