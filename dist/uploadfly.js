/**
 *
 * Uploadfly Client SDK
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UploadflyClient {
    constructor(apiKey) {
        this.uploadflyUploadEndpoint = `https://api.uploadfly.cloud/upload`;
        this.uploadflyDeleteEndpoint = `https://api.uploadfly.cloud/delete`;
        if (!apiKey)
            throw new Error("An API key is required to use the uploadfly client!");
        this.apiKey = apiKey;
    }
    uploadFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!file)
                throw new Error("A file is required to upload!");
            try {
                const formData = new FormData();
                formData.append("file", file);
                const response = yield fetch(this.uploadflyUploadEndpoint, {
                    method: "POST",
                    body: formData,
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                });
                if (!response.ok)
                    throw new Error("File upload failed");
                return response.json();
            }
            catch (error) {
                throw new Error(`An error occured during file upload: ${error.message}`);
            }
        });
    }
    deleteFile(fileUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!fileUrl)
                throw new Error("A file url must be provided!");
            try {
                const response = yield fetch(this.uploadflyDeleteEndpoint, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ file_url: fileUrl }),
                });
                if (!response.ok)
                    throw new Error(`File deletion failed`);
                return response.json();
            }
            catch (error) {
                throw new Error(`An error occured during file deletion: ${error.message}`);
            }
        });
    }
}
export default UploadflyClient;
