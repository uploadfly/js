export class CreateUploadflyClient {
  private apiKey: string;
  private uploadflyEndpoint: string = `https://api.uploadfly.cloud`;

  constructor(apiKey: string) {
    if (!apiKey) throw new Error("An API key is required.");
    this.apiKey = apiKey;
  }

  public async upload(
    file: File,
    config?: {
      filename?: string;
    }
  ) {
    if (!file) throw new Error("A file is required.");
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("filename", config?.filename || file.name);

      const response = await fetch(`${this.uploadflyEndpoint}/upload`, {
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

  public async delete(fileUrl: string) {
    if (!fileUrl) throw new Error("A file url must be provided.");
    try {
      const response = await fetch(`${this.uploadflyEndpoint}/delete`, {
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

  public image = {
    upload: async (
      file: File,
      config?: {
        filename?: string;
        maxFileSize?: string;
        width?: number;
        height?: number;
      }
    ) => {
      if (!file) throw new Error("A file is required.");
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("filename", config?.filename || file.name);
        formData.append("maxFileSize", config?.maxFileSize || "");
        formData.append("width", config?.width?.toString() || "");
        height && formData.append("height", config?.height?.toString() || "");

        const response = await fetch(`${this.uploadflyEndpoint}/image/upload`, {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        });
        if (!response.ok) throw new Error("Image upload failed.");
        return response.json();
      } catch (error: unknown | any) {
        throw new Error(
          `An error occurred during image upload: ${error.message}`
        );
      }
    },
  };
}
