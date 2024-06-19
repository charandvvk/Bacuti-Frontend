const getData = async (route) => {
    try {
        const response = await fetch(`http://localhost:3000/${route}`);
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData);
        }
        return responseData;
    } catch (error) {
        throw new Error(
            error.message === "Failed to fetch"
                ? "Unable to load data. Please check your internet connection or try again later as the server may be down."
                : error.message
        );
    }
};

export default getData;
