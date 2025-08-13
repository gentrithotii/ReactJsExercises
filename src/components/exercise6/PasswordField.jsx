import { useState } from "react";

const PasswordField = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className="input-group mb-3 w-25 text-center">
      <input
        type={show ? "password" : "text"}
        className="form-control"
        placeholder="Password"
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <button
          className="btn btn-outline-secondary"
          onClick={toggleShow}
          type="button"
        >
          {show ? "Show" : "Hide"}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
