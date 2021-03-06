import React, { Component } from 'react'
import NewTask from './components/newTask'
import Post from './components/Post'
import Get from './components/Get'

export default class App extends Component {
	render() {
		return (
			<div className='mainBox'>
				<div className='mainBox__inputBox'>
					<input type='text' id='Input' placeholder='input something...' />
					<input
						type='button'
						value='create'
						className='inputButton'
						onClick={this.forPost}
					/>
					<input
						type='button'
						value='get'
						className='inputButton'
						onClick={Get}
					/>
				</div>

				<div id='mainBox__resultBox'>
					<div className='resultBox__newitemBox'></div>
				</div>
			</div>
		)
	}
	forPost() {
		Post()
		NewTask()
	}
}
