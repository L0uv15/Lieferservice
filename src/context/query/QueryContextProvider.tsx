import { QueryClient, QueryClientProvider as TanstackProvider } from "@tanstack/react-query";

export default function QueryClientProvider(props: React.PropsWithChildren): React.JSX.Element {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: false,
            },
        },
    });

    return (
        <TanstackProvider client={queryClient}>
            {props.children}
        </TanstackProvider>
    );
}