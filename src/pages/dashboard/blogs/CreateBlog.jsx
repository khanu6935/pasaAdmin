import { useState, useMemo, useRef } from "react";
import {
  Header,
  InputFieldWithCount,
  TextAreaWithCount,
} from "../../../components";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

function Button({ title, color, ...props }) {
  return (
    <button
      className={`rounded-2xl text-white bg-${color} py-7 px-20 ${
        color == "navyBlue" ? "px-[6.6rem]" : ""
      } text-[20px] font-[Barlow]`}
      {...props}
    >
      {title}
    </button>
  );
}

function UploadButton({ coverImage, handleFileChange, previewURL }) {
  return (
    <div className="flex space-x-2 flex-wrap">
      <div
        className=" inline-block min-w-fit  bg-secondry rounded-2xl py-6 px-8 text-white cursor-pointer hover:border-secondary"
        onChange={handleFileChange}
      >
        <label
          htmlFor="dropzone-file"
          className="flex justify-center items-center space-x-4 cursor-pointer"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5 0H4.5C2.01566 0.00230706 0.00230706 2.01566 0 4.5V31.5C0.00230706 33.9843 2.01566 35.9977 4.5 36H31.5C33.9843 35.9977 35.9977 33.9843 36 31.5V4.5C35.9977 2.01566 33.9843 0.00230706 31.5 0ZM4.5 34.2C3.00948 34.1984 1.80165 32.9905 1.8 31.5V22.0957L8.57285 15.3229C9.80409 14.0959 11.7959 14.0959 13.0271 15.3229L31.8686 34.1625C31.747 34.1795 31.6262 34.1999 31.5 34.2H4.5ZM34.2 31.5C34.1992 32.181 33.9382 32.7958 33.5219 33.2707L21.0729 20.8227L22.9729 18.9229C24.2041 17.6959 26.1959 17.6959 27.4271 18.9229L34.2 25.6957V31.5ZM34.2 23.1505L28.6998 17.6503C26.7658 15.7202 23.6342 15.7202 21.7002 17.6503L19.8003 19.5502L14.2998 14.0502C12.3414 12.1799 9.25862 12.1799 7.3002 14.0502L1.8 19.5504V4.5C1.80165 3.00948 3.00948 1.80165 4.5 1.8H31.5C32.9905 1.80165 34.1984 3.00948 34.2 4.5V23.1505Z"
              fill="#016BE6"
            />
          </svg>

          <p className=" font-normal opacity-90 cursor-pointer">
            Upload Cover Image
          </p>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <div>
        {previewURL && (
          <img
            src={previewURL}
            alt="preview"
            className="w-[85px] h-[85px] object-cover rounded-2xl"
          />
        )}
      </div>
    </div>
  );
}

export default function () {
  const [text, setText] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [value, setValue] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);

  const editorRef = useRef(null);

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event?.target.files && event?.target?.files[0];

    // Check if the selected file is a JPG or PNG
    if (
      selectedFile &&
      selectedFile.type !== "image/jpeg" &&
      selectedFile.type !== "image/png"
    ) {
      setCoverImage(null);
    } else {
    }
    if (selectedFile) {
      console.log(
        "url",
        URL.createObjectURL(selectedFile),
        typeof URL.createObjectURL(selectedFile)
      );
      setPreviewURL(URL.createObjectURL(selectedFile));
      setCoverImage(selectedFile);
    }
  };

  function imageHandler() {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      var file = input.files[0];

      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          // Add the data URL to the uploaded images array
          setUploadedImages([...uploadedImages, reader.result]);

          // Insert the uploaded image into the editor

          console.log(editorRef.current.getEditor().insertEmbed());
          const range = editorRef?.current?.getEditor()?.getSelection(true);
          editorRef.current.getEditor().insertEmbed(range.index, reader.result);
        };
      }
    };
  }

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: ["Barlow"] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "super" }, { script: "sub" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }, { direction: "ltr" }],
          [{ size: ["small", false, "large", "huge"] }],
          ["link", "image", "video"],
          ["clean"],
        ],
        // handlers: {
        //   image: imageHandler,
        //   base64: false,
        // },
      },
    };
  }, []);

  return (
    <div className="bg-primary font-[Barlow] min-h-screen h-full flex flex-col">
      <div className="h-20">
        <Header />
      </div>

      <div className="bg-primary lg:px-10 px-0 py-10 flex-grow flex flex-col">
        <h3 className="text-textWhite px-5   pb-5 sm:pb-0 lg:px-0  font-semibold text-2xl  font-[Barlow]">
          Create New Blog
        </h3>

        <div className="rounded-md my-5 mx-5 lg:mx-0">
          <div className="w-full sm:w-[90%]">
            <InputFieldWithCount
              type="textarea"
              rows={10}
              onChange={(e) => setText(e.target.value)}
              maxLength={60}
              placeholder={"Enter Blog Title"}
              inputClass="py-5 place placeholder-white opacity-80 !placeholder-opacity-80 font-[Barlow] !px-2 !py-7"
            />
          </div>
          <div className="w-full">
            <TextAreaWithCount
              type="textarea"
              rows={6}
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={60}
              placeholder={"Enter Blog Title"}
              inputClass="py-5 place placeholder-white opacity-80 !placeholder-opacity-80  !font-[Barlow] !px-2 !py-7"
            />
          </div>
          <UploadButton
            handleFileChange={handleFileChange}
            coverImage={coverImage}
            previewURL={previewURL}
          />
          <div className="min-h-[641px] mt-10">
            <ReactQuill
              theme="snow"
              className="bg-secondary text-white h-full   shadow-sm  mt-1 block w-full sm:text-sm  rounded-md"
              value={value}
              onChange={setValue}
              modules={modules}
              ref={editorRef}
              formats={[
                "header",
                "font",
                "align",
                "bold",
                "italic",
                "underline",
                "strike",
                "color",
                "background",
                "script",
                "indent",
                "direction",
                "size",
                "link",
                "image",
                "video",
              ]}
            />
          </div>

          <div className="sm:space-x-8 space-y-5 sm:space-y-0 space-x-0 my-10">
            <Button title="Save as Draft" color="secondry" />
            <Button
              title="Publish"
              color="navyBlue"
              onClick={() => {
                navigate("/blog-details/1");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
