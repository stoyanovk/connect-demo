import { connect } from "../hooks";
import { getUsers } from "../api";
import { useEffect } from "react";

export default connect((state) => ({ usersList: state.usersList }))(
  function UserList({ dispatch, usersList }) {
    useEffect(() => {
      getUsers().then((r) =>
        dispatch({ type: "setUsersList", payload: { usersList: r } })
      );
    }, []);

    console.log("render UserList");
    if (!usersList?.length) {
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
            <li
              key={item.id}
              onClick={() =>
                dispatch({ type: "setUser", payload: { id: item.id } })
              }
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
