import { FormikWrapperProps } from '@/types/form';
import { Form, Formik } from 'formik';


function FormikWrapper<T>({
  formInitials,
  formSchema,
  submitFunc,
  children,
}: FormikWrapperProps<T>) {
  return (
    <Formik
      enableReinitialize
      initialValues={formInitials}
      validationSchema={formSchema}
      onSubmit={async (values, actions) => {
        await submitFunc(values, actions);
      }}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
}

export default FormikWrapper;
