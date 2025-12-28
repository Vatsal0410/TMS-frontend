import WorkInProgress from "../../components/WorkInProgress/WorkInProgress";
import { useApiHealth } from "../../hooks/useApiHealth";

const Home = () => {
  const apiStatus = useApiHealth();

  return <WorkInProgress apiStatus={apiStatus} />;
};

export default Home;
