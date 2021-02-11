import {row, col, css} from '../utils.js';

class Block {
	constructor(value, options) {
		this.value = value;
		this.options = options;
	}

	toHTML() {
		throw new Error('����� toHTML ������ ���� ����������');
	}
}

export class TitleBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const {tag = 'h1', styles} = this.options;

		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
	}
}

export class ImageBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const {styles, imgStyles, alt = 'image'} = this.options;

		return row(col(`<img src="${this.value}" style="${css(imgStyles)}" alt="${alt}" />`), css(styles));
	}
}
export class ColumnsBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const {styles} = this.options;

		const html = this.value.map(item => col(item));

		return row(html.join(''), css(styles));
	}
}
export class TextBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const {tag = 'p', styles} = this.options;

		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
	}
}