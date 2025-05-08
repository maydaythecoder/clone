export const GET = async () => {
  try {
    console.log("Fetching data from:", process.env.IMAGE_API_URL);
    const response = await fetch(process.env.IMAGE_API_URL);

    if (!response.ok) {
      console.error("HTTP error! status:", response.status);
      return new Response(JSON.stringify({ error: `HTTP error! status: ${response.status}` }), {
        status: response.status
      });
    }

    const contentType = response.headers.get("content-type");
    console.log("Content-Type:", contentType);

    if (!contentType || !contentType.includes("application/json")) {
      return new Response(JSON.stringify({ error: "Expected JSON response" }), {
        status: 400
      });
    }

    const parsedData = await response.json();
    console.log("Parsed Data:", parsedData);

    if (!Array.isArray(parsedData)) {
      return new Response(JSON.stringify({ error: "Expected an array of data" }), {
        status: 400
      });
    }

    return new Response(JSON.stringify(parsedData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: `Failed to fetch data: ${error.message}` }), {
      status: 500
    });
  }
};
