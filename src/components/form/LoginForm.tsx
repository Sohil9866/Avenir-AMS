import React, { useState } from "react";
import { z, ZodError } from "zod";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/Logo.svg";

// Zod schema
const schema = z.object({
  id: z
    .string()
    .min(3, "UserId must be at least 3 characters")
    .regex(/^\d+$/, "UserId must contain only numbers"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ id, password });

    if (!result.success) {
      const zodError = result.error as ZodError;
      setError(zodError.issues[0]?.message || "Invalid input.");
      return;
    }

    login("mock-token");
    setError("");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center bg-blue-100">
      {/* Logo block - order 1 on mobile, order 2 on large screens */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-6 order-1 lg:order-2">
        <img
          src={logo}
          alt="Avenir Logo"
          className="w-40 sm:w-60 md:w-80 lg:w-[70%] h-auto object-contain opacity-80"
        />
      </div>

      {/* Login form - order 2 on mobile, order 1 on large screens */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-10 order-2 lg:order-1">
        <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl z-10">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Employee Login
          </h2>

          {error && (
            <div className="text-red-500 text-sm text-center mb-4">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* UserId */}
            <div className="relative">
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                className="peer w-full px-4 pt-6 pb-2 text-sm bg-transparent border rounded-lg border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="UserId"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
                UserId
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="peer w-full px-4 pt-6 pb-2 text-sm bg-transparent border rounded-lg border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Password"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-4 text-sm text-gray-500 hover:text-blue-600"
              >
                {showPassword ? "🫣" : "👁️"}
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
