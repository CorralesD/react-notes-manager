import { useState } from 'react';
import s from './style.module.css';
import { Trash as TrashIcon } from 'react-bootstrap-icons';

export const TextCard = ({
  title,
  subtitle,
  content,
  onClickTrash,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isIconHovered, setIsIconHovered] = useState(false);

  const onClickTrash_ = (e) => {
    onClickTrash();
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClick}
      className={`card ${s.container}`}
      style={{ borderColor: isHovered ? '#0d6efd' : 'transparent' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='card-body'>
        <div className={s.title_row}>
          <h5 className='card-title'>{title}</h5>
          <TrashIcon
            onClick={onClickTrash_}
            size={20}
            onMouseEnter={() => setIsIconHovered(true)}
            onMouseLeave={() => setIsIconHovered(false)}
            style={{ color: isIconHovered ? '#FF7373' : '#b8b8b8' }}
          />
        </div>
        <h6 className='card-subtitle mb-2 text-muted'>{subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
};
