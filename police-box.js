var md5 = require("blueimp-md5").md5
    watch_list = ['/etc/shadow', '/etc/hosts']

watch_list.forEach (function (item) {
  var old_hash = "2fe8599cb25a0c790213d39b3be97c27"
      hash     = md5 (item)

  if (hash != old_hash) {
    console.log ("Change detected: " + item)
  }
})
