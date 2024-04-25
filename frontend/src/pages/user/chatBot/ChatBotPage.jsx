import React from 'react'
import WorkspaceHeader from '../../../components/user/WorkspaceHeader/WorkspaceHeader'
import WorkSpaceSideBar from "../../../components/user/WorkSpaceSideBar/WorkSpaceSideBar"
import ChatBotChatArea from '../../../components/user/chatBot/ChatBotChatArea'
import styled from 'styled-components'
import backgroundImage from "../../../../../chatBackground.jpg"


const ChatBotPage = () => {
  return (
    <>
      <WorkspaceHeader/>
      <WorkspaceBody>
        <WorkSpaceSideBar/>
       
          <ChatBotChatArea/>
       
      </WorkspaceBody>
    </>
  )
}

export default ChatBotPage
const WorkspaceBody = styled.div`
  display: flex;
  height: 100vh;
  
  background:#283041;
  `;
