import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup: React.FC = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    email: "",
    password: "",
    bvnDetails: {
      bvn: "",
      dateOfBirth: "",
    },
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    middleName: Yup.string(),
    phoneNumber: Yup.string()
      .matches(/^\+234\d{10}$/, "Enter a valid Nigerian phone number")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    bvnDetails: Yup.object().shape({
      bvn: Yup.string()
        .matches(/^\d{11}$/, "BVN must be exactly 11 digits")
        .required("BVN is required"),
      dateOfBirth: Yup.date().required("Date of Birth is required"),
    }),
  });

  const handleSubmit = (values: typeof initialValues) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div className="flex h-screen">
      {/* Background Image */}
      <div
        className="hidden lg:block bg-cover w-1/2"
        style={{
          backgroundImage: "url('https://via.placeholder.com/700x500')",
        }}
      ></div>

      {/* Signup Form */}
      <div className="w-full lg:w-1/2">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="p-8">
              <div className="mb-4 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 ">
                  Signup
                </h2>
                <p className="text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="mb-4 flex justify-between">
                <div className="w-1/2 mr-2">
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    className={`w-full border ${errors.firstName && touched.firstName
                        ? "border-red-500"
                        : "border-gray-300"
                      } rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    className={`w-full border ${errors.lastName && touched.lastName
                        ? "border-red-500"
                        : "border-gray-300"
                      } rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <Field
                  type="text"
                  id="middleName"
                  name="middleName"
                  placeholder="Enter your middle name"
                  className={`w-full border ${errors.middleName && touched.middleName
                      ? "border-red-500"
                      : "border-gray-300"
                    } rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                />
                <ErrorMessage
                  name="middleName"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4 flex justify-between">
                <div className="w-1/2 mr-2">
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    className={`w-full border ${errors.phoneNumber && touched.phoneNumber
                        ? "border-red-500"
                        : "border-gray-300"
                      } rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`w-full border ${errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                      } rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`w-full border ${errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                    } rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <Field
                  type="text"
                  id="bvn"
                  name="bvnDetails.bvn" // Access nested object field
                  placeholder="Enter your BVN"
                  className={`w-full border ${errors.bvnDetails?.bvn && touched.bvnDetails?.bvn
                      ? "border-red-500"
                      : "border-gray-300"
                    } rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                />
                <ErrorMessage
                  name="bvnDetails.bvn" // Access nested object field
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <Field
                  type="date"
                  id="dateOfBirth"
                  name="bvnDetails.dateOfBirth" // Access nested object field
                  className={`w-full border ${errors.bvnDetails?.dateOfBirth &&
                      touched.bvnDetails?.dateOfBirth
                      ? "border-red-500"
                      : "border-gray-300"
                    } rounded-md py-2 px-3 focus:outline-none focus:bg-gray-800`}
                />
                <ErrorMessage
                  name="bvnDetails.dateOfBirth" // Access nested object field
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 focus:bg-gray-800"
              >
                Signup
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
