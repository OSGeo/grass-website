import Cookify from './cookify.js'
import track from './track.js'

var cookify = new Cookify('cookie_consent', function () {
    document.getElementById('manage').classList.add('d-none')
}, function (data) {
    console.log(data)
}, false, false, 'necessary')

window.cookify = cookify
window.track = track

document.getElementById('open').addEventListener('click', function () {
    document.getElementById('manage').classList.remove('d-none')
})

if (!cookify.getDataState(cookify.viewedName)) {
    document.getElementById('manage').classList.remove('d-none')
}

console.log("necessary",cookify.getDataState('necessary'))
console.log("analysis",cookify.getDataState('analysis'))

track()
