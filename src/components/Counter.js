import { useAppContext } from "../hooks";

export function Counter() {
  const { count } = useAppContext();
  console.log("render Counter");
  return (
    <div>
      <h3>Counter Value</h3>
      <p>{count}</p>
    </div>
  );
}
