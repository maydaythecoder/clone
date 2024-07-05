export const GET = async () => {
    try {
        const response = await fetch(process.env.IMAGE_API_URL);
        const parsedData = await response.json();
        return new Response(JSON.stringify(parsedData), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};