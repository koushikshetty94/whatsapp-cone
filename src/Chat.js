import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { SearchOutlined, AttachFile } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
        <div className="chat__headerInfo">
          <h2>this is the group</h2>
          <p>details</p>
        </div>
        <div className="header__headerRiht">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">koushik</span>
          this is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__reciever chat__message">
          <span className="chat__name">koushik</span>
          this is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button
            // onClick={sendMessage}
            type="submit"
          >
            {" "}
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
