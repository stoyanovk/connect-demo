import { connect } from "../hooks";

function UserInfo({ user }) {
  console.log("render UserInfo");
  if (!user) {
    return (
      <div>
        <h3>Select user</h3>
      </div>
    );
  }
  const { name, email } = user;
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

const stateToProps = (state) => ({ user: state.user });
export default connect(stateToProps)(UserInfo);
