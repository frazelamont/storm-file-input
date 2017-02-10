import FileInput from './libs/storm-file-input';

const onDOMContentLoadedTasks = [() => {
	FileInput.init('input[type=file]');
}];
    
if('addEventListener' in window) window.addEventListener('DOMContentLoaded', () => { onDOMContentLoadedTasks.forEach(fn => fn()); });
