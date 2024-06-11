import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailers } from "../entities/Trailers";

const useTrailer = (slug: string) => {
  const apiClient = new APIClient<Trailers>(`/games/${slug}/movies`);
  return useQuery({
    queryKey: ["trailer", slug],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
