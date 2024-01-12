import { TextCard } from '../../components/TextCard/TextCard';
import { NoteList } from '../../containers/NoteList/NoteList';

export const NoteBrowse = (props) => {
  return (
    <>
      <TextCard
        title='azeazeaz'
        subtitle='01/01/22'
        content=' akzejakzeja jaekajzekaje jaekjazkejazkejakejazejazkejakzejazkej jaekajekajek akzejakzeja jaekajzekaje jaekjazkejazkejakejazejazkejakzejazkej jaekajekajekakzejakzeja jaekajzekaje jaekjazkejazkejakejazejazkejakzejazkej jaekajekajekakzejakzeja jaekajzekaje jaekjazkejazkejakejazejazkejakzejazkej jaekajekajek akzejakzeja jaekajzekaje jaekjazkejazkejakejazejazkejakzejazkej jaekajekajek'
        onClickTrash={() => alert('Click trash')}
        onClick={() => alert('Click note')}
      />
      <NoteList />
    </>
  );
};
