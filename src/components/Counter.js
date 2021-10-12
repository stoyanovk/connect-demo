import { connect } from "../hooks";

function Counter({ count, dispatch }) {
  console.log("render Counter");
  return (
    <div>
      <h3>Counter Value</h3>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "inceCount" })}>inc</button>
    </div>
  );
}
export default connect((state) => ({ count: state.count }))(Counter);
