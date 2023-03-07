import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

export const ContactEditorForm = ({
  initialValues = { name: '', number: '' },
  onSubmit,
  btnText,
}) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const nameRegExp =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  const phoneRegExp =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  let SignupSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .matches(
        nameRegExp,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required(),
    number: yup
      .string()
      .matches(
        phoneRegExp,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Name
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />
          </label>
          <br />
          <label>
            Number
            <Field name="number" type="text" />
            <ErrorMessage name="number" component="span" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            {btnText}
          </button>
        </Form>
      )}
    </Formik>
  );
};
