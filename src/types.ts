export type ApiResponse<T> = {
	success: boolean
	data?: T
	error?: string
	status: number
}

export interface ImageUploadResponse {
	url: string
	path: string
	type: string
	size: string
	name: string
	blurhash?: string
}

export type UploadResponse = Omit<ImageUploadResponse, 'blurhash'>

// Extends native fetch response time to include typings from the UF-API under _data.
export interface TypedResponse<T> extends Response {
	_data?: T
}
