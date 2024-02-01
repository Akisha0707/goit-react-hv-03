import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Name must be at least 3 symb long')
    .max(50, 'Name cannot exceed 50 characters')
    .required('This is a required field'),
  number: Yup.string()
    .oneOf(['h', 'r', ''], 'Acces must be kl so ro d')
    .required('This is a required field'),
});


const ContactForm = () => {
    return (
        <Formik
        initialValues={{}}
        onSubmit={() => { }}>
            <Form className={css.styleForm}>
                <input className={css.inputNameForm} type="text" name='name'/>
                <input className={css.inputNumberForm} type="text" number='number'/>
                <button className={css.buttonForm}>Add contact</button>
            </Form>
       </Formik>
        
    )
    
}

export default ContactForm