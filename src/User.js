import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/user.json")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col items-center">
        <img src={user.profilePicture} alt="ProfilePicture" className="w-32 h-32 rounded-full shadow-lg mb-4" />

        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>

        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
}

export default Profile;
