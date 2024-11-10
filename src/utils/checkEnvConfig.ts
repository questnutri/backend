import 'colors'

export function checkEnvConfig() {
	let result = true
	const requiredEnvVars = []
	if(!process.env.OFF_URI) {
		requiredEnvVars.push('DB_USERNAME', 'DB_PASSWORD', 'DB_CONNECTION_URI')
	}
	requiredEnvVars.push('JWT_SECRET')

	const missingVars = requiredEnvVars.filter(key => !process.env[key])
    
	if (missingVars.length > 0) {
        result = false
        console.log(
            `${'[ERROR]'.red.bold} Found error at ${'.env'.yellow.underline} file: {
				\n${missingVars.map(key => `    ${'* Missing required environment variable: '.red}${key.magenta.bold}`)
                .join('\n')}\n}`
        )
    }


	if(!result) console.log(`Define missing environment variables in a .env file and reload.`)
	return result
}
