var md5File    = require('md5-file'),
    watch_list = [{
      'path': '/etc/shadow',
      'hash': '2fe8599cb25a0c790213d39b3be97c27',
    },{
      'path': '/etc/hosts',
      'hash': '2fe8599cb25a0c790213d39b3be97c27'
    }]

watch_list.forEach (function (item) {
  var verified_hash = item.hash,
      path          = item.path,
      hash          = md5File (path)

  if (hash != verified_hash) {
    console.log ("Change detected: " + path)
    console.log ("    verified hash: "   + verified_hash)
    console.log ("     current hash: "   + hash)
  }
})
