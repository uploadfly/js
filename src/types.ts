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
