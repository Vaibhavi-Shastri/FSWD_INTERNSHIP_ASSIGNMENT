import React, { useState } from "react";

const data = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Navbar.js", type: "file" },
          { name: "Footer.js", type: "file" },
        ],
      },
      {
        name: "pages",
        type: "folder",
        children: [
          { name: "Home.js", type: "file" },
          { name: "About.js", type: "file" },
        ],
      },
      { name: "App.js", type: "file" },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [{ name: "index.html", type: "file" }],
  },
];

function Folder({ item }) {
  const [open, setOpen] = useState(false);

  if (item.type === "file") {
    return <div className="file">📄 {item.name}</div>;
  }

  return (
    <div>
      <div className="folder" onClick={() => setOpen(!open)}>
        📁 {item.name}
      </div>

      {open && (
        <div className="children">
          {item.children.map((child, index) => (
            <Folder key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function FolderArchitect() {
  return (
    <>
      <style>{`
        body {
          font-family: 'Segoe UI', sans-serif;
          margin: 0;
          background: #f5f7fa;
        }

        .container {
          padding: 20px;
        }

        .folder {
          cursor: pointer;
          font-weight: bold;
          margin: 5px 0;
        }

        .file {
          margin-left: 20px;
          color: #555;
        }

        .children {
          margin-left: 20px;
          border-left: 2px solid #ccc;
          padding-left: 10px;
        }

        .folder:hover {
          color: #007bff;
        }
      `}</style>

      <div className="container">
        <h1>Folder Architect</h1>

        {data.map((item, index) => (
          <Folder key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default FolderArchitect;
