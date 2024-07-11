export const GET = async () => {
  try {
    console.log("Fetching data from:", process.env.IMAGE_API_URL);
    const response = await fetch(process.env.IMAGE_API_URL);

    if (!response.ok) {
      console.error("HTTP error! status:", response.status);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    console.log("Content-Type:", contentType);

    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Expected JSON response");
    }

    const parsedData = await response.json();
    console.log("Parsed Data:", parsedData);

    if (!Array.isArray(parsedData)) {
      throw new Error("Expected an array of data");
    }

    return parsedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: `Failed to fetch data: ${error.message}` };
  }
};
