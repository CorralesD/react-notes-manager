import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NoteForm } from '../../components/NoteForm/NoteForm';
import { useState } from 'react';
import { NoteApi } from '../../api/note-api';
import { updateNote, deleteNote } from '../../store/notes/notes-slice';

export const Note = (props) => {
  const { noteId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );
  const [isEditable, setIsEditable] = useState(false);

  const submit = async (formValues) => {
    const updatedNote = await NoteApi.updateById(noteId, formValues);
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  };

  const deleteNote_ = async () => {
    if (window.confirm('Delete note ?')) {
      NoteApi.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate('/');
    }
  };

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? 'Edit Note' : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickDelete={deleteNote_}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
};
