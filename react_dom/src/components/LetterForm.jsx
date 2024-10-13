import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LetterForm(props) {
    const [mailboxId, setMailboxId] = useState(props.mailboxes.length ? props.mailboxes[0]._id : '');
    const [recipient, setRecipient] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addLetter(mailboxId, recipient, message);
        navigate(`/mailboxes/${mailboxId}`);
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Select Mailbox:
            <select value={mailboxId} onChange={(e) => setMailboxId(e.target.value)}>
            {props.mailboxes.map((mailbox) => (
                <option key={mailbox._id} value={mailbox._id}>
                Box #{mailbox._id} ({mailbox.boxholder})
                </option>
            ))}
            </select>
        </label>
        <label>
            Recipient Name:
            <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            />
        </label>
        <label>
            Message:
            <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
        </label>
        <button type="submit">Send Letter</button>
        </form>
    );
    }
    
    export default LetterForm;
