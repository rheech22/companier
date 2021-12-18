var tool = [
  [{ header: "1" }, { header: "2" }],
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }, { font: [] }, { align: [] }],
  ["image"],
];
var option = {
  placeholder: "Compose an epic...",
  theme: "snow",
  modules: {
    toolbar: tool,
  },
  bounds: "#parent",
};
var quill = new Quill("#quill", option);
