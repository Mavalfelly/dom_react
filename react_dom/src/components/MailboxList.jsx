import { Link } from 'react-router-dom';

function MailboxList(props) {
  return (
    <div>
      {props.mailboxes.map((mailbox) => (
        <div className="mail-box" key={mailbox._id}>
          <Link to={`/mailboxes/${mailbox._id}`}>
            Box #{mailbox._id}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MailboxList;