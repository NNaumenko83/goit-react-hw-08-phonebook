import { useNavigate } from 'react-router-dom';
import { ContactEditorForm } from 'components/ContactEditorForm/ContactEditorForm';
import { Overlay, Modal } from './EditMaterialModal.styled';
import { useParams } from 'react-router-dom';
import { useGetContactsQuery } from 'redux/contactsApi';
import { useUpdateContactMutation } from 'redux/contactsApi';
import { toast } from 'react-toastify';

const EditContactModal = () => {
  const { contactId } = useParams();
  const { data: contacts } = useGetContactsQuery();
  const getContactById = id => contacts.find(contact => contact.id === id);
  const contact = getContactById(contactId);
  console.log(contact);
  const contactName = contact.name;
  const contactNumber = contact.number;
  const [updateContact] = useUpdateContactMutation();
  const navigate = useNavigate();
  const closeModal = () => navigate('/goit-react-hw-08-phonebook/contacts');

  const checkName = name =>
    contacts.find(
      searchedContact =>
        searchedContact.name.toLowerCase() === name &&
        searchedContact.id !== contact.id
    );

  const handleUpdateContact = async fields => {
    const name = fields.name.toLowerCase();

    if (checkName(name)) {
      toast.error('This contact is already exist', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    try {
      await updateContact({ id: contactId, ...fields });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
      <Modal>
        {contact && (
          <ContactEditorForm
            initialValues={{ name: contactName, number: contactNumber }}
            btnText="Save changes"
            onSubmit={handleUpdateContact}
          />
        )}

        <button type="button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </Overlay>
  );
};

export default EditContactModal;
