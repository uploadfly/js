# UploadflyClient

[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[![GitHub stars](https://img.shields.io/github/stars/adedoyin-emmanuel/uploadfly-client.svg?style=for-the-badge)](https://github.com/adedoyin-emmanuel/uploadfly-client/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/adedoyin-emmanuel/uploadfly-client.svg?style=for-the-badge)](https://github.com/adedoyin-emmanuel/uploadfly-client/network)
[![GitHub downloads](https://img.shields.io/github/downloads/adedoyin-emmanuel/uploadfly-client/total.svg?style=for-the-badge)](https://github.com/adedoyin-emmanuel/uploadfly-client/releases)

UploadflyClient is a JavaScript/TypeScript SDK that provides an easy way to interact with the Uploadfly cloud service. With this SDK, you can upload and delete files from your Uploadfly storage without directly making API requests. It simplifies file management within your applications.

## Installation

You can install the `UploadflyClient` SDK via npm:

```bash
npm install @uploadfly/uploadflyclient

```

```js
import UploadflyClient from "@uploadfly/uploadflyclient";

const client = new UploadflyClient("your_api_key_here");
```

## Uploading Files

To upload files from your frontend application, here's an example:

```js
try {
  const response = await client.uploadFile(file);
  console.log("File uploaded successfully:", response);
} catch (error) {
  console.error("File upload failed:", error.message);
}
```

## Deleting Files

You can also delete files from Uploadfly using the SDK:

```js
const fileUrl = "https://cdn.uploadfly.cloud/your_file_url_here";

try {
  const response = await client.deleteFile(fileUrl);
  console.log("File deletion successful:", response.data.message);
} catch (error) {
  console.error("File deletion failed:", error.message);
}
```
