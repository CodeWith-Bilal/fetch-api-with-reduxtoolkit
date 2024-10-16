
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";
import { fetchUsers } from "../features/userSlice";
import { AppDispatch } from "../app/store";

const UserComponent = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const openseaData = useSelector((state: RootState) => state.users.data);
  const status = useSelector((state: RootState) => state.users.status);
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>OpenSea Data:</h1>
      {openseaData?.map((val) => {
        // Check if the object has a valid image_url
        if (val.image_url) {
          return (
            <div key={val.id}>
              <p>{val.name}</p>
              <p>{val.description}</p>
              <img src={val.image_url} alt={val.name} />
            </div>
          );
        }
        return null; // Skip rendering if there is no image_url
      })}
    </div>
  );
};

export default UserComponent;
