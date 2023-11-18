import UploadflyClient from "../src/index";

describe("React SDK", () => {
  const client = new UploadflyClient("uf_99d846ef15c041a8bf6dd1bd4200cc8b");

  it("should upload a file and return valid response", async () => {
    const blob = new Blob(["file-content"], { type: "text/plain" });
    const file = new File([blob], "testing.txt", {
      lastModified: Date.now(),
    });

    const response = await client.uploadFile(file);

    expect(response.success).toBe(true);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject({
      name: expect.anything(),
      data: expect.anything(),
      size: expect.anything(),
      type: expect.anything(),
      url: expect.anything(),
    });
  });

  it("should delete a file and return valid response", async () => {
    const testFile = "https://cdn.uploadfly.cloud/9fpKZy/WhiteSur.jpg";
    const response = await client.deleteFile(testFile);

    expect(response.success).toBe(true);
    expect(response.status).toBe(200);
    expect(response.data.message).toContain("deleted successfully");
  });
});
