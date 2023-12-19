import { ButtonListItem, ListItem } from './ContactElementList.styles';
import PropTypes from 'prop-types';

const ContactElementList = ({ contact, onDelete }) => {
  return (
    <ListItem key={contact.id}>
      {`${contact.name}: ${contact.number}`}
      <ButtonListItem type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </ButtonListItem>
    </ListItem>
  );
};

ContactElementList.propTypes = {
  // PropTypes.shape({}). Un objeto que tenga determinada estructura
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
export default ContactElementList;
