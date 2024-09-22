    import React, { useEffect } from 'react';
    import ace from 'ace-builds/src-noconflict/ace';
    import 'ace-builds/src-noconflict/mode-c_cpp';
    import 'ace-builds/src-noconflict/theme-monokai'; // Import the correct theme

    const Editor = () => {
        useEffect(() => {
            const editor = ace.edit("editor");

            // Set the theme to twilight
            editor.setTheme("ace/theme/monokai");
            editor.session.setMode("ace/mode/c_cpp");

            // Set options for the editor
            editor.setOptions({
                fontSize: '16px',  // Set the font size to 16px
                autoScrollEditorIntoView: true,
                copyWithEmptySelection: true,
                mergeUndoDeltas: "always"
            });
            editor.focus();
            
        }, []);

        return (
            <>
                <div className="relative w-full h-screen overflow-y-auto">
                    <div id="editor" className="absolute top-0 right-0 bottom-0 left-0 custom-bg " >
                    // You are using GCC
                    </div>
                </div>
            </>
        )
    }

    export default Editor;
