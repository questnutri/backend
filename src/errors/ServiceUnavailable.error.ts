import BaseError from './BaseError.error'

export default class ServiceUnavailable extends BaseError {
	constructor(error:unknown=null, message:string=`Service currently unavailable`, status:number=503)  {
		super(message, status)
	}
}