// BETTER ERROR HANDLING WITH CUSTOM ERROR CLASS

class UFError extends Error {
	public status?: number
	public tips?: string
	constructor({ message, status }: { message: string; status?: number }) {
		super(message)
		this.message = message
		this.status = status ?? undefined
	}
}
