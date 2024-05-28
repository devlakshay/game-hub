import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface Genre {
    id: number;
    name: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: Genre[];
}

interface FetchGameResponse {
    count: number;
    results: Game[];
}


const useGames = (requestConfig?: AxiosRequestConfig, deps?: any[]) => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
        .get<FetchGameResponse>("/games", { signal: controller.signal, ...requestConfig  })
        .then((res) => {
            setGames(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { games, error, loading };
}

export default useGames;