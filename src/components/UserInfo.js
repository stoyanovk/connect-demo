import { useAppContext } from "../hooks";

export function UserInfo() {
  const { userInfo } = useAppContext();
  console.log("render UserInfo");

  if (!userInfo) {
    return (
      <div>
        <h3>Select user</h3>
      </div>
    );
  }
  const { name, email } = userInfo;
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
