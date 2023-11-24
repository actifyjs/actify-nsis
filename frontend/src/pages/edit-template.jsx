import Layout from "@/components/Layout";
import { useLocation } from "react-router-dom";

export default function () {
  const location = useLocation();

  return <Layout>{JSON.stringify(location?.state)}</Layout>;
}
