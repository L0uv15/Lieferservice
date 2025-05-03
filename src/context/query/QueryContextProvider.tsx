import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QueryContextProvider(props: React.PropsWithChildren): React.JSX.Element {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: false,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    );
}