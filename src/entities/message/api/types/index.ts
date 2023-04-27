export interface Message {
	id: number,
	sender: number,
	receiver: number,
	body: string,
	sentTime: Date,
	isDeleted: boolean,
	isChecked: boolean,
	editedBody?: string,
	rections?: "Reaction[]",
	forwardedFrom?: number,
	repliedTo?: number,
}
