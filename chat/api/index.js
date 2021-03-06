const data = require('./mock-data')
const LATENCY = 100

export function getAllMessages(cb){
	setTimeout(() => {
		cb(data)
	},LATENCY)
}

export function createMessage({text,thread},cb){
	const timestamp = Date.now()
	const id  = 'm_' + timestamp
	const message = {
		id,
		text,
		timestamp,
		threadID:thread.id,
		threadName:thread.name,
		authorName:'fengmeiru'
	}
	setTimeout(function(){
		cb(message)
	},LATENCY)
}