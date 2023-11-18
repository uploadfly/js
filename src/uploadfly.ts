class UploadflyClient {
  private apiKey: string;
  private uploadflyUploadEndpoint: string = `https://api.uploadfly.cloud/upload`;
  private uploadflyDeleteEndpoint: string = `https://api.uploadfly.cloud/delete`;

  constructor(apiKey: string) {
    if (!apiKey) throw new Error("An API key is required.");
    this.apiKey = apiKey;
  }

  public async uploadFile(
    file: File,
    config?: {
      filename?: string;
    }
  ): Promise<any> {
    if (!file) throw new Error("A file is required.");
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("filename", config?.filename || file.name);

      const response = await fetch(this.uploadflyUploadEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      });
      if (!response.ok) throw new Error("File upload failed.");
      return response.json();
    } catch (error: unknown | any) {
      throw new Error(`An error occured during file upload: ${error.message}`);
    }
  }

  public async deleteFile(fileUrl: string): Promise<any> {
    if (!fileUrl) throw new Error("A file url must be provided.");
    try {
      const response = await fetch(this.uploadflyDeleteEndpoint, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file_url: fileUrl }),
      });
      if (!response.ok) throw new Error(`File deletion failed.`);
      return response.json();
    } catch (error: unknown | any) {
      throw new Error(
        `An error occured during file deletion: ${error.message}`
      );
    }
  }
}

export default UploadflyClient;
