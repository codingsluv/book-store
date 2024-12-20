import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="w-full max-w-md px-4 py-8 bg-white rounded-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Please Login...</h2>
        <form className="space-y-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>

          <p className="text-red-500 text-xs italic mb-3">Message</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-600"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="btn-primary px-6 space-x-1 flex items-center gap-1 "
            >
              <span className="bg-purple-400  px-12 py-2 rounded-md text-base font-secondary font-bold hover:bg-slate-400 hover:text-white transition-all duration-200 cursor-pointer">
                Login
              </span>
            </button>
          </div>
        </form>
        <p className="inline-block align-baseline font-medium mt-4 text-sm">
          Haven`t account yet?
          <Link to="/register" className="text-blue-500 hover:text-blue-800">
            {" "}
            Register
          </Link>
        </p>
        <div className="mt-4">
            <button
                className="w-full flex flex-wrap gap-1 items-center justify-center bg-slate-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={""}
            >
                <FaGoogle className="mr-2" />
                Sign in with Google
            </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
            &copy;2025 Codingsluv. All rights reserved.
        </p>
      </div>
    </div>
  );
}
