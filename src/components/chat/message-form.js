import React from "react";

export const MessageForm = ({ message = '', user, onSubmit, onChange }) => {
  return (
    <form onSubmit={(event) => onSubmit(event, message, user.uid)}>
      <div className="form-group">
        <label htmlFor="message">Email address</label>
        <textarea
          value={message}
          className="form-control"
          id="message"
          placeholder="Enter message"
          onChange={onChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={message.length === 0}
      >
        Submit
      </button>
    </form>
  );
};
