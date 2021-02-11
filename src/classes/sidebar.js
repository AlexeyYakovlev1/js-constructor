import {block} from '../utils.js';
import { TextBlock, TitleBlock } from './blocks.js';

export class Sidebar {
	constructor(selector, updateCallback) {
		this.$el = document.querySelector(selector);
		this.update = updateCallback;
		this.init();
	}

	init() {
		this.$el.insertAdjacentHTML('afterbegin', this.template);
		this.$el.addEventListener('submit', event => {
			event.preventDefault();

			// event.target = form
			const type = event.target.name;
			const value = event.target.value.value;
			const styles = event.target.styles.value;
			let newBlock;

			switch (type) {
				case 'text':
					newBlock = new TextBlock(value, {styles: styles});
					break;
				case 'title':
					newBlock = new TitleBlock(value, {styles: styles}); 
					break;
				default: 
					return type;
			}

			this.update(newBlock);
			
			event.target.value.value = '';
			event.target.styles.value = '';
		});
	}

	get template() {
		return [
			block('text'),
			block('title')
		].join('');
	}
}