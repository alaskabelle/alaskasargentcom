import './index.scss'
import 'normalize.css'
import audio from '/audio/websitesoundscape.ogg'

document.querySelector('audio').src = audio

document.querySelector('.circle').addEventListener('mouseenter', () => {
	document.querySelector('audio').play()
})
document.querySelector('.circle').addEventListener('mouseleave', () => {
	document.querySelector('audio').pause()
})
