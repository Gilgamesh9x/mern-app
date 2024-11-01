import { ChartsContainer, StatsContainer } from "../components";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const Stats = () => {
  const { results, monthyAppsData } = useLoaderData();

  return (
    <>
      <StatsContainer results={results} />
      {monthyAppsData?.length > 0 && <ChartsContainer data={monthyAppsData} />}
    </>
  );
};

export default Stats;

export async function jobsStatsLoader() {
  try {
    const { data } = await axios.get("/api/v1/jobs/jobs-stats");
    return data;
  } catch (error) {
    console.log(error);
    return toast.error(
      error.response.data.message || "Something wrong happened"
    );
  }
}
