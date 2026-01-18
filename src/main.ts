import { createApp } from 'vue';
import App from './App.vue';
import { initEditor } from './editor/editor';
import { effects as blocksEffects } from '@blocksuite/blocks/effects';
import { effects as presetsEffects } from '@blocksuite/presets/effects';

debugger
blocksEffects();
presetsEffects();

(async () => {
	try {
		const appState = await initEditor();
		const app = createApp(App);
		app.provide("appState", appState);
		app.mount('#app');
	} catch (error) {
		console.error(error);
	}
})();

