import { useParams } from 'react-router-dom';

function MailboxDetails(props) {
    const { mailboxId } = useParams(); 
    const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === parseInt(mailboxId)); 

    const selectedLetters = props.letters.filter(
      (letter) => letter.mailboxId === parseInt(mailboxId)
    );
  
    return (
      <div>
        <h2>Mailbox Details</h2>
        <p>Box Number: {selectedBox._id}</p>
        <p>Boxholder: {selectedBox.boxholder}</p>
        <p>Box Size: {selectedBox.boxSize}</p>
  
        <h3>Letters</h3>
        {selectedLetters.length > 0 ? (
          <ul>
            {selectedLetters.map((letter, index) => (
              <li key={index}>
                <strong>To: {letter.recipient}</strong>
                <p>{letter.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No letters found for this mailbox.</p>
        )}
      </div>
    );
  }
  
  export default MailboxDetails;