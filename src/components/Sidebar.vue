<template>
  <div class="sidebar">
    <div class="header">All Docs</div>
    <div class="doc-list">
      <div v-for="doc in docs"
           :key="doc.id"
           :class="{ 'doc-item': true, active: editor?.doc === doc }"
           @click="selectDoc(doc as Doc)">
        {{ doc.meta?.title || 'Untitled' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import { AppState } from './EditorProvider.vue';
import { Doc, DocCollection } from '@blocksuite/store';
import { AffineEditorContainer } from '@blocksuite/presets';

let editor: AffineEditorContainer;
let collection: DocCollection;
const docs = ref<Doc[]>();

const appState = inject<AppState>('appState')!;
editor = appState.editor;
collection = appState.collection;
docs.value = (
  [...collection.docs.values()].map(blocks => blocks.getDoc())
);

const updateDocs = () =>
  (docs.value = [...collection.docs.values()].map(blocks => blocks.getDoc()));

collection.slots.docUpdated.on(updateDocs);
// editor.slots?.docLinkClicked.on(updateDocs);

const selectDoc = (doc: Doc) => {
  editor.doc = doc;
  updateDocs();
};
</script>
