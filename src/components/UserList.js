import { useAppContext } from "../hooks";
import { getUsers } from "../api";
import { useEffect } from "react";

export function UserList() {
  const { usersList, dispatch } = useAppContext();

  useEffect(() => {
    getUsers().then((r) =>
      dispatch({ type: "setUsersList", payload: { usersList: r } })
    );
  }, []);
  console.log("render UserList");
  if (!usersList.length) {
    return (
      <div>
        <h3>User list is empty</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>User list</h3>
      <ul>
        {usersList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
