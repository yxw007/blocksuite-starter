// import '@blocksuite/presets/themes/affine.css';
import { AffineEditorContainer } from '@blocksuite/presets';
import { Schema } from '@blocksuite/store';
import { DocCollection } from '@blocksuite/store';
import { AffineSchemas } from '@blocksuite/blocks';

export async function initEditor() {
  const schema = new Schema().register(AffineSchemas);
  const collection = new DocCollection({ schema });
  collection.meta.initialize();

  const doc = collection.createDoc({ id: 'page1' });
  doc.load(() => {
    const pageBlockId = doc.addBlock('affine:page', {});
    doc.addBlock('affine:surface', {}, pageBlockId);
    const noteId = doc.addBlock('affine:note', {}, pageBlockId);
    doc.addBlock('affine:paragraph', {}, noteId);
  });

  const editor = new AffineEditorContainer();
  editor.doc = doc;
  // editor.slots.docLinkClicked.on(({ docId }) => {
  //   const target = <Doc>collection.getDoc(docId);
  //   editor.doc = target;
  // });
  // await editor.updateComplete;

  return { editor, collection };
}
