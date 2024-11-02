import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from '../ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'; 
import { addContact } from '../../redux/contactsSlice'; 

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch(); 

  const onSubmit = (values, actions) => { 
    const newContact = { id: nanoid(), name: values.name, number: values.number };
    dispatch(addContact(newContact)); 
    actions.resetForm(); 
  }

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={onSubmit}
    >
      <Form className={s.form}>
        <div className={s.formContainer}>
          <label>Name</label>
          <Field className={s.formField} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={s.formContainer}>
          <label>Number</label>
          <Field className={s.formField} type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={s.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;