/**
 *
 * Uploadfly Client SDK
 */
declare class UploadflyClient {
    private apiKey;
    private uploadflyUploadEndpoint;
    private uploadflyDeleteEndpoint;
    constructor(apiKey: string);
    uploadFile(file: File): Promise<any>;
    deleteFile(fileUrl: string): Promise<any>;
}
export default UploadflyClient;
