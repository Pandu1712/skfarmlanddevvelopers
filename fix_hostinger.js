import * as ftp from "basic-ftp"

async function fix() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        console.log("Connecting to FTP...")
        await client.access({
            host: "217.21.91.248",
            user: "u770273348",
            password: "Skfarmland@123",
            secure: false
        })
        
        console.log("Connected successfully. Current directory:")
        console.log(await client.pwd())
        
        console.log("Listing files:")
        const list = await client.list()
        for (const item of list) {
            console.log(item.name)
        }

    }
    catch (err) {
        console.error("FTP Error:", err)
    }
    client.close()
}

fix()
