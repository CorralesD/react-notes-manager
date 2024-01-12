import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NoteApi } from './api/note-api';
import { setNoteList } from './store/notes/notes-slice';

export const App = () => {
  const dispatch = useDispatch();

  const fetchAllNotes = async () => {
    const noteList = await NoteApi.fetchAll();
    dispatch(setNoteList(noteList));
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
