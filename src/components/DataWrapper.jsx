export default function DataWrapper({ isFetching, error, data, children }) {
    if (!data && isFetching) {
        return <div>Loading data...</div>;
    }
    if (!data && error) {
        return <div>{error.message}</div>;
    }
    return children;
}
