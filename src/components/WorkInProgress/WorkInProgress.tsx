import { useApiHealth } from "../../hooks/useApiHealth";

const WorkInProgress = () => {
  const { message, status } = useApiHealth();

  return (
    <div className="m-10 text-center hover:animate-pulse ">
      <h1 className="text-4xl font-bold">Work in progress</h1>
      <p className="mt-4 text-lg animate-bounce ">{message}</p>
      <p className={`mt-1 text-lg font-bold underline ${status! > 399 ? 'text-red-500' : 'text-green-500'}`}>{status}</p>
    </div>
  );
};

export default WorkInProgress;
