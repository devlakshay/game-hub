import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Data {
  480: string;
  max: string;
}

interface Response {
  id: number;
  name: string;
  preview: string;
  data: Data;
}

const useTrailer = (slug: string) => {
  const apiClient = new APIClient<Response>(`/games/${slug}/movies`);
  return useQuery({
    queryKey: ["trailer", slug],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
