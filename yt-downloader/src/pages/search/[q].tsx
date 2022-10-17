import callAPI, { APIResponseTypes } from "@/lib/API";
import Layout from "@/components/Layout";
import DisplayAllVideos from "@/components/DisplayAllVideos";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import swal from "@/components/Swal";
import useSWR from "swr";

function useSearch(query: string): {
  data: APIResponseTypes;
  isLoading: boolean;
  isError: Error;
} {
  const fetcher = async (path: string) =>
    await callAPI({ path, method: "GET" });

  const { data, error } = useSWR(`search/?q=${query}`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
    refreshWhenOffline: true,
    refreshWhenHidden: false,
    refreshInterval: 0,
  }) as {
    data: any;
    error: Error;
  };

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

function Search() {
  const router = useRouter();

  const { q } = router.query as { q: string };

  const { data, isLoading, isError } = useSearch(q);

  if (isLoading) return <Loading />;
  if (isError) return swal.error("An error has occurred", isError.message);

  return (
    <Layout title="YT Downloader - Search">
      <h3 className="h3 text-center p-4">YouTube Downloader - Search</h3>

      {data && <DisplayAllVideos data={data.data} />}
    </Layout>
  );
}

export default Search;
