function completedTask() {
	let complete = document.getElementsByClassName('completedTask')
	let i
	for (i = 0; i < complete.length; i++) {
		complete[i].onclick = function () {
			if (this.style.background === 'green') {
				this.style.background = 'rgb(235, 235, 235)'
			} else {
				this.style.background = 'green'
			}
		}
	}
}

export default completedTask
