import app from './app'
import 'dotenv/config'
import dbConnect, { mongoConnect } from './database/dbConnect'
import { checkEnvConfig } from './utils/checkEnvConfig'

const PORT = process.env.PORT || 3000


app.get("/swagger.json", (req, res) => {
  const swaggerDoc = require("./swagger.json");
  const host = req.headers['host'];
  swaggerDoc.servers = [{ url: `${req.protocol}://${host}` }];
  res.json(swaggerDoc);
});

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`)
	console.log(`Access through: http://localhost:${PORT}/api/v1/docs`)
	if(checkEnvConfig()) dbConnect() 
})