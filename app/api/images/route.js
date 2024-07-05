export const GET = async () => {
    try {
        const response = await fetch(process.env.IMAGE_API_URL);
        const parsedData = await response.json();
        return parsedData;
    } catch (error) {
        return { error: 'Failed to fetch data' };
    }
};