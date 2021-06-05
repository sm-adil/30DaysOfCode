const editorContainer = document.querySelector('#editor__content')
const previewContainer = document.querySelector('#preview__content')

let editorContent

editorContainer.addEventListener('keyup', function() {
    editorContent = editorContainer.value
    previewContainer.innerHTML = marked(editorContent)
})
