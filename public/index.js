const guessInput = document.getElementById('guessInput')
const guessButton = document.getElementById('guessButton')
const resultMessage = document.getElementById('resultMessage')
const moreLess = document.getElementById('moreLess')
const randomNum = Math.floor(Math.random() * 100)

guessButton.addEventListener('click', () => {
	const userNum = parseInt(guessInput.value)
	if (userNum < randomNum) {
		moreLess.textContent = 'Ur num smaller'
		guessInput.value = ''
	} if (userNum > randomNum) {
		moreLess.textContent = 'Ur num nigger'
		guessInput.value = ''
	} if (userNum == randomNum) {
		moreLess.classList.add('opacity-0')
		resultMessage.innerHTML = '<p>Congrjewlations. U won. Do u wanna <a href="" class="underline">Restart</a>?</p>'
	}
})

console.log(randomNum)
