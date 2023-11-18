import UploadflyClient from "../src/index";

import dotenv from "dotenv";
dotenv.config();

describe("React SDK", () => {
  const apiKey = process.env.REACT_APP_UPLOADFLY_API_KEY;
  const client = new UploadflyClient(apiKey!);
  let uploadedFileUrl: string;

  it("should upload a PNG file and return valid response", async () => {
    // Create a PNG blob
    const base64Content =
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhklEQVR42mP8/wcAAwAB/AV5r8HAAAAAElFTkSuQmCC";
    const blob = new Blob([Buffer.from(base64Content, "base64")], {
      type: "image/png",
    });

    const file = new File([blob], "something.png", {
      type: "image/png",
      lastModified: Date.now(),
    });

    const response = await client.uploadFile(file);

    expect(response.success).toBe(true);
    expect(response.status).toBe(201);

    // Capture the URL of the uploaded file for later use
    uploadedFileUrl = response.data.url;
  });

  it("should delete the uploaded file and return valid response", async () => {
    // Use the captured URL of the uploaded file
    const response = await client.deleteFile(uploadedFileUrl);

    expect(response.success).toBe(true);
    expect(response.status).toBe(200);
    expect(response.data.message).toContain("deleted successfully");
  });
});
