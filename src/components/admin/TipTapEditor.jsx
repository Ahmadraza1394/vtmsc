"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { useState, useCallback } from "react";

const TipTapEditor = ({
  content,
  onChange,
  placeholder = "Start writing...",
}) => {
  const [isUploading, setIsUploading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-brand-primary underline",
        },
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-lg max-w-none focus:outline-none min-h-[200px] p-4",
      },
    },
  });

  const addImage = useCallback(
    async (e) => {
      // Prevent form submission when clicking image button
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.onchange = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.target.files[0];
        if (!file) return;

        const uploadImage = async (file) => {
          try {
            setIsUploading(true);
            // Direct upload to Cloudinary using unsigned preset
            const formData = new FormData();
            formData.append("file", file);
            formData.append(
              "upload_preset",
              process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "ml_default",
            );
            formData.append("folder", "vtmsc/editor");

            const response = await fetch(
              `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
              {
                method: "POST",
                body: formData,
              },
            );

            if (!response.ok) {
              throw new Error("Upload failed");
            }

            const result = await response.json();
            return result.secure_url;
          } catch (error) {
            console.error("Image upload failed:", error);
            alert("Failed to upload image");
            return null;
          } finally {
            setIsUploading(false);
          }
        };

        const imageUrl = await uploadImage(file);
        if (imageUrl) {
          editor.chain().focus().setImage({ src: imageUrl }).run();
        }
      };

      input.click();
    },
    [editor],
  );

  const addLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive("bold")
              ? "bg-brand-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive("italic")
              ? "bg-brand-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive("strike")
              ? "bg-brand-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Strike
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive("heading", { level: 1 })
              ? "bg-brand-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          H1
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive("heading", { level: 2 })
              ? "bg-brand-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          H2
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive("heading", { level: 3 })
              ? "bg-brand-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          H3
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive("bulletList")
              ? "bg-brand-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Bullet List
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive("orderedList")
              ? "bg-brand-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Numbered List
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        <button
          onClick={addLink}
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive("link")
              ? "bg-brand-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Link
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addImage(e);
          }}
          disabled={!editor || isUploading}
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
          title="Add Image"
        >
          {isUploading ? "Uploading..." : "Image"}
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-1 rounded text-sm font-medium ${
            editor.isActive("blockquote")
              ? "bg-brand-primary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Quote
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="px-3 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100"
        >
          Divider
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="px-3 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        >
          Undo
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className="px-3 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        >
          Redo
        </button>
      </div>

      {/* Editor */}
      <div className="bg-white min-h-[200px]">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TipTapEditor;
