import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import PublishIcon from "@material-ui/icons/Publish";
import AddIcon from "@material-ui/icons/Add";

export default function UploadModal({ open, handleClose }) {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const allowedTypes = ['jpg', 'jpeg', 'png'];

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal__container">
        <div className="modal__body">
          <form>
            <input
              type="file"
              id="file"
              className="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file" className="file__placeholder">
              <h4>
                <AddIcon /> {file ? file.name : "Select a file to upload"}
              </h4>
            </label>
            <textarea
              name="caption"
              id=""
              cols="30"
              rows="10"
              placeholder="Caption"
              className="form__caption"
              onChange={(e) => setCaption(e.target.value)}
            >
              {caption}
            </textarea>
            <button className="primary-insta-btn">
              <PublishIcon /> Upload
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}
