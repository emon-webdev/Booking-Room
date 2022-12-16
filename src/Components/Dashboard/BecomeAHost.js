import React, { useContext, useEffect, useState } from "react";
import { getImageUrl } from "../../api/imgUpload";
import { getRole, hostRequest } from "../../api/user";
import { AuthContext } from "../../contexts/AuthProvider";
import BecomeHostForm from "../Form/BecomeHostForm";

const BecomeAHost = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      console.log(data);
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];
    getImageUrl(image)
      .then((data) => {
        const hostData = {
          location: location,
          documentImg: data,
          role: "requested",
          email: user?.email,
        };
        console.log(hostData);
        hostRequest(hostData)
          .then((data) => {
            setRole("requested");
            console.log(data);
          })
          .catch((error) => console.log(error));
        setRole("requested");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {role ? (
        <>
          <div className="h-screen text-3xl font-semibold text-gray-600 flex flex-col justify-center items-center">
            Request Sent, wait form admin approval
          </div>
        </>
      ) : (
        <>{!loading && <BecomeHostForm handleSubmit={handleSubmit} />}</>
      )}
    </>
  );
};

export default BecomeAHost;
