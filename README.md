The JavaScript SDK provides a convenient interface for interacting with the UploadFly API to upload and delete files.

## Installation

```bash
npm install @uploadfly/js
```

### Class: `CreateUploadflyClient`

### Constructor

#### `new CreateUploadflyClient(apiKey: string)`

- Creates a new instance of the `CreateUploadflyClient` class.
- **Parameters:**
  - `apiKey` (string): The API key required for authentication with the UploadFly service.
- **Throws:**
  - `Error`: If the `apiKey` parameter is not provided.

### Methods

#### `upload(file: File, config?: { filename?: string })`

- Uploads a file to the Uploadfly cloud.
- **Parameters:**
  - `file` (File): The file to be uploaded.
  - `config` (optional): Additional configuration options.
    - `filename` (string): The desired filename for the uploaded file. If not provided, the original filename will be used.
  - **Returns:**
    - A Promise that resolves with the response from the Uploadfly API.
  - **Throws:**
    - `Error`: If the `file` parameter is not provided or if the file upload fails.
    - `Error`: If an error occurs during the file upload process.

#### `delete(fileUrl: string)`

- Deletes a file from the Uploadfly cloud.
- **Parameters:**
  - `fileUrl` (string): The URL of the file to be deleted.
  - **Returns:**
    - A Promise that resolves with the response from the Uploadfly API.
  - **Throws:**
    - `Error`: If the `fileUrl` parameter is not provided or if the file deletion fails.
    - `Error`: If an error occurs during the file deletion process.

## Example Usage

```javascript
// Instantiate the UploadFly client with your API key
const uploadfly = new CreateUploadflyClient("your-api-key");

// Example: Upload a file
const file = /* File object */;
try {
  const uploadResponse = await uploadfly.upload(file, { filename: "custom-filename" });
  console.log("File uploaded successfully:", uploadResponse);
} catch (error) {
  console.error("Error uploading file:", error.message);
}

// Example: Delete a file
const fileUrl = /*File URL */;
try {
  const deleteResponse = await uploadfly.delete(fileUrl);
  console.log("File deleted successfully:", deleteResponse);
} catch (error) {
  console.error("Error deleting file:", error.message);
}
```
