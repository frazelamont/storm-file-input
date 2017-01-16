import should from 'should';
import FileInput from '../dist/storm-file-input';
import 'jsdom-global/register';

const html = '<div><input type="file" name="test-field" id="test-field"></div>';

document.body.innerHTML = html;

let FileInputItem = FileInput.init('input[type=file]');

describe('Initialisation', () => {
	
	it('should create an element with the className \'filename\'', () => {
		Array.from(document.querySelector('input[type=file]').nextElementSibling.classList).should.containEql('filename');
	});

	
});