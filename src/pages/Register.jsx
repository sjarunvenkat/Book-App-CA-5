import { useState } from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const password = watch("password");

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      setSuccessMessage("Registration successful!!!");
      reset();
    }
  };

  const handleInputChange = () => {
    setSuccessMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {successMessage && (
            <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
              {successMessage}
            </div>
          )}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("Name", { required: "Name is required" })}
              onChange={handleInputChange}
            />
            {errors.Name && (
              <p className="text-red-500 mt-2">{errors.Name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email id",
                },
              })}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be more than 4 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password cannot be more than 20 characters",
                },
              })}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-500 mt-2">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Re-Enter Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("re-password", {
                required: "Re-Enter Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              onChange={handleInputChange}
            />
            {errors["re-password"] && (
              <p className="text-red-500 mt-2">
                {errors["re-password"].message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
