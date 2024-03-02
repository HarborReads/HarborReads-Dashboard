import React, { useState } from "react";

function EditProfile() {
  // State variables to hold user data
  const [username, setUsername] = useState("D4RKER");
  const [password, setPassword] = useState("**************");
  const [gender, setGender] = useState("male"); // Defaulting to 'male'
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  // Event handler for gender selection
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  // Event handler for profile picture upload
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center mb-6">
          {/* Display uploaded profile picture or placeholder */}
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
          ) : (
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a9 9 0 0 0-9 9c0 4.963 4.037 9 9 9s9-4.037 9-9a9 9 0 0 0-9-9zm0 2a7 7 0 0 1 7 7c0 3.859-3.141 7-7 7s-7-3.141-7-7a7 7 0 0 1 7-7zM8 9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 1 1-2 0v-2H8a1 1 0 0 1 0-2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          {/* Option to upload profile picture */}
          <label htmlFor="profile-picture" className="text-blue-500 cursor-pointer">
            Change Profile Picture
          </label>
          <input
            type="file"
            id="profile-picture"
            className="hidden"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </div>
        {/* Profile Fields */}
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Gender Field */}
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* Date of Birth Field */}
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
