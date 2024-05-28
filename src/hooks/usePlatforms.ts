import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface FetchGenreResponse {
    count: number;
    results: Platform[];
}

const usePlatforms = () => {

    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
        .get<FetchGenreResponse>("/platforms/lists/parents", { signal: controller.signal })
        .then((res) => {
            setPlatforms(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

        return () => controller.abort();
    }, []);

    return { platforms, error, loading };
}

export default usePlatforms;