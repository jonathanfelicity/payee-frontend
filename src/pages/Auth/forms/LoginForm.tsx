import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../../../validators/forms";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth/auth.context";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const { handleLogin } = useContext(AuthContext);
  return (
    <div className="w-full md:w-1/2 p-10 h-full">
      <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
      <p className="text-gray-600 mb-4">Please enter your login credentials.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form className="h-full">
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 font-bold">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded mt-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-800 font-bold"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 p-2 rounded mt-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white py-2 px-4 w-full rounded hover:bg-gray-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
