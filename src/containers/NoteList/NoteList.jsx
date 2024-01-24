import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.css';
import { TextCard } from '../../components/TextCard/TextCard';
import { useNavigate } from 'react-router-dom';
import { NoteApi } from '../../api/note-api';
import { deleteNote } from '../../store/notes/notes-slice';

export const NoteList = (props) => {
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteNote_ = async (note) => {
    if (window.confirm('Delete note ?')) {
      NoteApi.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  };

  return (
    <div className='row justify-content-center'>
      {noteList.map((note) => {
        return (
          <div key={note.id} className={s.card_container}>
            <TextCard
              title={note.title}
              content={note.content}
              subtitle={note.created_at}
              onClick={() => {
                navigate('/note/' + note.id);
              }}
              onClickTrash={() => {
                deleteNote_(note);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
