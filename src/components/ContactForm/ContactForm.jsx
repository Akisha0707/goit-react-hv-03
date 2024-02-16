import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const userSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Name must be at least 3 symb long')
    .max(50, 'Name cannot exceed 50 characters')
    .required('This is a required field'),
  number: Yup.string().required('This is a required field'),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        username: '',
        number: '',
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        onAdd({ id: Date.now(), ...values });
        actions.resetForm();
        // model.id = nanoid();
      }}
    >
      <Form className={css.styleForm}>
        <div className={css.wrapName}>
          <label className={css.labelUsername} htmlFor={nameFieldId}>
            Username
          </label>
          <Field className={css.usernameForm} type="text" name="username" id={nameFieldId} />
          <ErrorMessage className={css.error} type="text" name="username" as="span" />
        </div>

        <div className={css.wrapNumber}>
          <label className={css.labelNumber} htmlFor={numberFieldId}>
            Number
          </label>
          <Field className={css.numberForm} type="text" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} type="text" name="number" as="span" />
        </div>

        <button className={css.buttonForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
