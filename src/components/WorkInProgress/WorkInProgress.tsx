interface Props {
  apiStatus: boolean | null;
}

const WorkInProgress = ({ apiStatus }: Props) => {
  return (
    <div className="wip-container">
      <h1>🚧 Work in Progress</h1>
      <p>We are building something awesome.</p>

      <div className="status">
        API Status:{" "}
        {apiStatus === null
          ? "Checking..."
          : apiStatus
          ? "✅ Online"
          : "❌ Offline"}
      </div>
    </div>
  );
};

export default WorkInProgress;
