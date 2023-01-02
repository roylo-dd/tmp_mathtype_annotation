/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import MathType from '@wiris/mathtype-ckeditor5';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Essentials,
	MathType,
	Paragraph
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'MathType',
			'undo',
			'redo'
		]
	},
	language: 'en'
};

export default Editor;
