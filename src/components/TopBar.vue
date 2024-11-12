<template>
  <div class="top-bar">Vue Basic</div>
  <div class="export"
       @click="exportToMK">export to markdown</div>
  <div class="export"
       @click="exportToHTML">export to html</div>
  <div class="export"
       @click="exportToPDF">export to pdf</div>
  <div class="export"
       @click="exportToPNG">export to png</div>
</template>


<script setup lang="ts">
import { inject } from 'vue';
import { AppState } from './EditorProvider.vue';
import { ExportManager } from "@blocksuite/blocks"

const { editor } = inject<AppState>('appState')!;
console.log("TopBar appState", editor);

function exportToMK() {
  const rootService = editor?.std?.getService('affine:page');
  const mkTransformer = rootService?.transformers?.markdown;
  mkTransformer.exportDoc(editor.doc).catch(console.error);
}

function exportToHTML() {
  const rootService = editor?.std?.getService('affine:page');
  const htmlTransformer = rootService?.transformers.html;
  htmlTransformer?.exportDoc(editor.doc).catch(console.error);
}

function exportToPDF() {
  editor.std.get(ExportManager).exportPdf().catch(console.error);
}

function exportToPNG() {
  editor.std.get(ExportManager).exportPng().catch(console.error);
}

</script>

<style>
.export {
  &:hover {
    color: blue;
    cursor: pointer;
  }
}
</style>
