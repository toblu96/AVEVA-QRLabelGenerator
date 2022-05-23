<h1 align="center"> AVEVA QR-Label Generator</h1>
<p align="center">Automatically generate QR-Codes in a MES project for storage location and inventory items as well as custom codes for scan actions.</p>

https://user-images.githubusercontent.com/25683183/169794614-764309bb-9ce2-4705-8364-2cb439b6274f.mp4


## Why using Label Generator?

This label generator provides automatic created QR-Codes for item inventory and storage locations. This allows scan-based actions with the MES system and thus less complicated user interactions.

 ❯ 🔃 **Automatic generated** QR-Codes from MES system <br>
 ❯ ✨ **Auto import** data from MES DB to stay up to date <br>
 ❯ 📦 **Item inventory** QR-Codes for actions based on a specific material <br>
 ❯ 🗄️ **Storage location** QR-Codes for item transfer based on a scan action <br>
 ❯ 🔳 **Custom QR-Codes** to extend client-specific actions <br>


<h2 align="center">🐳 Container deployment</h2>

### Deploy with Docker CLI

Add port mapping, environment variables and volume mount according to your needs.

```bash
$ docker run -it -p 3022:3000 -e <...> -v <...> toblu/aveva-qr-label-generator:<tag>
```

### Deploy on Portainer

0️⃣ Configure image from docker hub

```bash
toblu/aveva-qr-label-generator:<tag>
```

1️⃣ Add port mapping

```bash
3022:3000
```


2️⃣ Define `.env` variables

```bash
DB_HOST=''
DB_PORT=''
DB_INSTANCE=''
DB_NAME=''
DB_USER=''
DB_PASSWORD=''
```

3️⃣ Mount volume

```bash
<path to volume>:/usr/src/nuxt-app/data
```

4️⃣ Add network

5️⃣ Deploy container
<br>
<br>
🪄 Application is ready at `http://<host>:3022/`

<h2 align="center">🐋 Docker Build</h2>

```bash
$ docker build -t <username>/nuxt-pluzzy-dashboard:<tag> .
```

<h2 align="center">🧪 Build setup</h2>

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```


For detailed explanation on how things work, check out the  [documentation](https://nuxtjs.org).
