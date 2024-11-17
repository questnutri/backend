import BaseError from './BaseError.error'

export default class Forbidden extends BaseError {
	constructor(message:string=`Forbidden Access`, status:number=403) {
		super(message, status)
	}
}