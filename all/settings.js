const fs = require('fs')
const chalk = require('chalk')
//SETTING
global.owner = "628" // isi nomor kamu
global.ownerStore = "628" // isi nomor kamu untuk store
global.namabot = "Queen Elisa Store" // ubah aja
global.namaCreator = "QUEEN ELISA" // ubah aja
global.namaStore = "Queen Elisa Store" // ubah aja
global.autoJoin = false // true=on false=off
global.antilink = false // true=on false=off
global.anticall = true // true=on false=off
global.themeemoji = '🪀' //gausah sih tapi terserah deng
global.versisc = 'Private' // terserah
global.namasc = 'Private' // terserah
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ" // mending gausah
global.apitokendo = 'dop_v1_9a0906d0b316369de5ba2eec0ef74a045e8e2f22567eff00876bd2194132def1' // gausah
global.apilinode = '-'
//SERVER 1
global.domain = '-' // Isi Domain kamu
global.apikey = '-' // Isi Apikey Plta kamu
global.capikey = '-' // Isi Apikey Pltc kamu
//SERVER 2
global.domainn = '-' // Isi Domain kamu
global.apikeyy = '-' // Isi Apikey Plta kamu
global.capikeyy = '-' // Isi Apikey Pltc kamu
//SERVER 3
global.domainnn = '-' //isi domain kamu
global.apikeyyy = '-' // isi apikey kamu
global.capikeyyy = '-' // isi apikey kamu
//BATAS
global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "-"
global.signature = "hash_hmac('sha256', $merchantCode.$channel.$merchantRef, $privateKey)"
global.merchant = "INV55567"
//MAU PEDIA
global.api_key = "iTn0HbFfeqHVgSEVVFGfRd6z26QuDntcqh0gWnExriecgS2F2PzHojNrgOySz85S"//@zallDev
global.api_id = "s0IJboQFZHznkYQ0"//@zallDev
global.secret = "h&gg#RafatharOffcial976*#"//@zallDev
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = "" 
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
global.packname = "©Sticker" // ini untuk sticker
global.author = "Created By Queen Elisa MD" // ini untuk stiker
global.jumlah = "5"
global.youtube = "*https://youtube.com/@" // bebas asal jan kosong
global.grup = "*https://chat.whatsapp.com/" // bebas asal jangan kosong
global.telegram = "*-*" //bebas asal 
global.instagram = "*https://instagram.com/" // bebas asal jangan kosong
global.harga1 = "15k"
global.spekvps1 = "8gb Core 4"
global.vps1 = "Digital Ocean"
global.harga2 = "20k"
global.spekvps2 = "8gb Core 4"
global.vps2 = "Linode"
global.harga3 = "25k"
global.spekvps3 = "16gb Core 6"
global.vps3 = "Linode"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})