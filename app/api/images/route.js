export const GET = async () => {
    try {

        const response = await fetch(process.env.IMAGE_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error('Expected JSON response');
        }

        const parsedData = await response.json();
        if (!Array.isArray(parsedData)) {
            throw new Error('Expected an array of data');
        }

        return parsedData; // Assuming parsedData is an array of image objects
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: `Failed to fetch data: ${error.message}` };
    }
};
