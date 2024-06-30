import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind CSS chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 item-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

// STARTER CODE FOR THIS FILE//
// --------------------------//
// --------------------------//
// --------------------------//

// import React from "react";

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//             alt="Tailwind CSS chat bubble component"
//           />
//         </div>
//       </div>
//       <div className={`chat-bubble text-white bg-blue-500`}>
//         Hi! What is upp?
//       </div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 item-center">
//         12:42
//       </div>
//     </div>
//   );
// };

// export default Message;
