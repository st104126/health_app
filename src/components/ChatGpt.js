import React from 'react'
import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'


const API_KEY = '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';

const ChatGpt = () => {
    const [Typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: "hello, i am chatgpt",
            sender: "ChatGPT"
        }
    ]) //[]
    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: 'user',
            direction: 'outgoing'
        }

        const newMessages = [...messages, newMessage];

        // update our message state
        setMessages(newMessages);
        //set a typing indicator
        setTyping(true);
        //process message to chatGPT(send it over and see response)
        await processMessageToChatGPT(newMessages);

    }
    async function processMessageToChatGPT(chatMessages) {
        //chatMessages {sender:"user" or "chatGPT", message:"The message content here"}
        //apiMessages {role:"user" or "assistant", content:"The message content here"}
        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === 'ChatGPT') {
                role = 'assistant'
            } else {
                role = 'user'
            }
            return { role: role, content: messageObject.message }
        });

        // role:"user" -> a message from the user, "assistant"->a respondse from chatGPT
        // "system" -> generally one initial message defining HOW we want chatgpt to talk

        const systemMessage = {
            role: "system",
            content: "Only answer questions about Gastroenterology inspection problems."
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages//[meddage1, message2,...]
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
        });
    }

    return (
        <div className='w-full h-[700px] relative' >
            <MainContainer>
                <ChatContainer>
                    <MessageList typingIndicator={Typing ? <TypingIndicator content='聊天機器人回答中' /> : null}
                    >
                        {messages.map((message, i) => {
                            return <Message key={i} model={message} />
                        })}
                    </MessageList>
                    <MessageInput placeholder='請輸入問題' onSend={handleSend} />
                </ChatContainer>
            </MainContainer>
        </div>
    )
}

export default ChatGpt