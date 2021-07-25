let types = {
  media: ["mp4", "mkv"],
  archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
  documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
  app: ['exe', 'dmg', 'pkg', "deb"]
}

function Fn(src){
    connsole.log("tre command executd with path" +src)
}

module.exports = {
  organizeFxn : organizeFn 
}
