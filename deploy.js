import * as ftp from "basic-ftp"
import path from "path"
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function deploy() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        console.log("Connecting to FTP Server...")
        await client.access({
            host: "217.21.91.248",
            user: "u770273348",
            password: "Skfarmland@123",
            secure: false
        })
        
        console.log("Connected successfully. Current directory:")
        console.log(await client.pwd())

        console.log("Uploading backend files...")
        await client.ensureDir("backend")
        await client.uploadFrom(path.join(__dirname, 'backend', 'db.js'), "db.js")
        await client.uploadFrom(path.join(__dirname, 'backend', '.env'), ".env")
        await client.cdup() // Go back to root

        console.log("Uploading root server files...")
        await client.uploadFrom(path.join(__dirname, 'server.js'), "server.js")
        await client.uploadFrom(path.join(__dirname, 'package.json'), "package.json")
        await client.uploadFrom(path.join(__dirname, 'package-lock.json'), "package-lock.json")
        
        console.log("Uploading compiled frontend (dist folder)...")
        if (fs.existsSync(path.join(__dirname, 'dist'))) {
            await client.uploadFromDir(path.join(__dirname, 'dist'), "dist")
        } else {
            console.log("Warning: 'dist' folder not found. Did you forget to run 'npm run build'?")
        }
        
        console.log("Deployment completed successfully!")
    }
    catch (err) {
        console.error("FTP Deployment failed:", err)
    }
    client.close()
}

deploy()
