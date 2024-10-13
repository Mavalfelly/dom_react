import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import LetterForm from './components/LetterForm';

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([])
  const addBox = (boxholder, boxSize) => {
    const newBox = {
      _id: mailboxes.length + 1,
      boxholder: boxholder,
      boxSize: boxSize,
    };
    setMailboxes([...mailboxes, newBox]);
  };
  const addLetter = (mailboxId, recipient, message) => {
    const newLetter = {
      mailboxId: mailboxId,
      recipient: recipient,
      message: message,
    };
    setLetters([...letters, newLetter])
  };
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<main><h1>POST OFFICE</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/new-letter' element={<LetterForm mailboxes={mailboxes} addLetter={addLetter}/>}/>
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>}/>
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>} />
      </Routes>


    </>
  )
}

export default App
