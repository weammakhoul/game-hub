import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => 
    useQuery({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
        staleTime: 1000 * 60 * 60 * 24, // 24 Hours
        initialData: { count: platforms.length, results: platforms },
    });

export default usePlatforms;