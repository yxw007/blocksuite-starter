<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { DocCollection } from '@blocksuite/store';
import { AffineEditorContainer } from '@blocksuite/presets';

export interface AppState {
  editor: AffineEditorContainer;
  collection: DocCollection;
}
</script>
