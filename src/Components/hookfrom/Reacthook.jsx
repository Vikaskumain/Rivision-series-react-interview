
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reacthook = () => {
  const showToast = () => {
    toast.success('Your form is successfully submitted!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 text-black">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Any place in your app!</h1>
        <Formik
          initialValues={{ email: '', password: '', name: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if (!values.name) {
              errors.name = 'Required';
            } else if (!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm.test(values.name)) {
              errors.name = 'First letter should be uppercase';
            }
            if (!values.password) {
              errors.password = 'Required';
            } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(values.password)) {
              errors.password = 'Invalid password';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              showToast();
              resetForm(); 
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field type="text" name="name" placeholder="Enter the Name" className="w-full p-2 border border-gray-300 rounded-md" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Field type="email" name="email" placeholder="Enter the Email" className="w-full p-2 border border-gray-300 rounded-md" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Field type="password" name="password" placeholder="Enter the Password" className="w-full p-2 border border-gray-300 rounded-md" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="flex justify-center">
                <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Reacthook;
