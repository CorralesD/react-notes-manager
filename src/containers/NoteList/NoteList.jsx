import { useSelector } from 'react-redux';
import s from './style.module.css';

export const NoteList = (props) => {
  const noteList = useSelector((store) => store.noteSlice.noteList);
  return (
    <div className={s.card_container}>
      {noteList.map((note) => {
        return (
          <div>
            <>{note.title}</>
          </div>
        );
      })}
    </div>
  );
};
