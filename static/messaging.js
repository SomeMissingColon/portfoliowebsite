// Messaging Page Interactive Functionality

document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const messagesContainer = document.getElementById('messagesContainer');

    if (!messageInput || !sendBtn || !messagesContainer) {
        return; // Not on messaging page
    }

    // Predefined auto-responses from Thomas
    const autoResponses = [
        "That's a great question! Let me think about that... 🤔",
        "Interesting perspective! I've actually dealt with something similar at TELUS.",
        "Ha! That reminds me of a time when I was building automation scripts at 3am... ☕",
        "I love talking about this stuff! Want to hear about my Python automation project?",
        "You know what's funny? LinkedIn recruiters ask me this exact same thing! 😂",
        "As someone who's been in both sales AND tech... let me tell you a story.",
        "Fun fact: I automated this exact workflow using Python and SQL!",
        "That's actually covered in my profile if you want the full story! But yeah, happy to chat about it.",
        "This is exactly the kind of problem I solved at Datazentrik with AI! 🤖",
        "Great minds think alike! I was literally just thinking about that yesterday.",
        "You're speaking my language! Sales + Tech = 🔥",
        "Honestly? That's what makes this industry so exciting. Always something new to learn!",
        "I once cold-called 60 people in a day about something similar... want to hear what I learned?",
        "Real talk: Most people overcomplicate this. Here's what actually works...",
        "LOL yes! Everyone says that until they see the results. 📊"
    ];

    // Handle sending messages
    function sendMessage() {
        const text = messageInput.value.trim();
        if (!text) return;

        // Add user message
        addMessage(text, 'sent');
        messageInput.value = '';

        // Scroll to bottom
        scrollToBottom();

        // Show typing indicator
        setTimeout(() => {
            showTypingIndicator();
        }, 500);

        // Auto-respond after delay
        setTimeout(() => {
            hideTypingIndicator();
            const response = getRandomResponse();
            addMessage(response, 'received');
            scrollToBottom();
        }, 1500 + Math.random() * 1000);
    }

    // Add message to conversation
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;

        if (type === 'received') {
            const avatar = document.createElement('img');
            avatar.src = 'profile.jpg';
            avatar.alt = 'Thomas Dion';
            avatar.className = 'message-avatar';
            messageDiv.appendChild(avatar);
        }

        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';

        const p = document.createElement('p');
        p.textContent = text;
        bubble.appendChild(p);

        messageDiv.appendChild(bubble);
        messagesContainer.appendChild(messageDiv);
    }

    // Get random auto-response
    function getRandomResponse() {
        return autoResponses[Math.floor(Math.random() * autoResponses.length)];
    }

    // Show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message received typing-indicator';
        typingDiv.id = 'typingIndicator';

        const avatar = document.createElement('img');
        avatar.src = 'profile.jpg';
        avatar.alt = 'Thomas Dion';
        avatar.className = 'message-avatar';
        typingDiv.appendChild(avatar);

        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';

        typingDiv.appendChild(bubble);
        messagesContainer.appendChild(typingDiv);
        scrollToBottom();
    }

    // Hide typing indicator
    function hideTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
    }

    // Scroll to bottom of messages
    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Event listeners
    sendBtn.addEventListener('click', sendMessage);

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Disable send button when input is empty
    messageInput.addEventListener('input', () => {
        sendBtn.disabled = !messageInput.value.trim();
    });

    // Initial state
    sendBtn.disabled = true;
    scrollToBottom();

    // Add CSS for typing indicator
    const style = document.createElement('style');
    style.textContent = `
        .typing-dots {
            display: flex;
            gap: 4px;
            padding: 4px 0;
        }

        .typing-dots span {
            width: 8px;
            height: 8px;
            background-color: #00000099;
            border-radius: 50%;
            animation: typing 1.4s infinite;
        }

        .typing-dots span:nth-child(2) {
            animation-delay: 0.2s;
        }

        .typing-dots span:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes typing {
            0%, 60%, 100% {
                transform: translateY(0);
                opacity: 0.7;
            }
            30% {
                transform: translateY(-10px);
                opacity: 1;
            }
        }

        .message.sent .message-bubble {
            animation: slideInRight 0.3s ease-out;
        }

        .message.received .message-bubble {
            animation: slideInLeft 0.3s ease-out;
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Handle other button clicks with humor
    const iconButtons = document.querySelectorAll('.icon-btn');
    iconButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const icon = this.querySelector('i');
            if (!icon) return;

            const classList = icon.className;

            if (classList.includes('fa-phone')) {
                alert('📞 Calling Thomas Dion...\n\nJust kidding! This is a portfolio site. But you can reach me at +1 (438) 462-2434!');
            } else if (classList.includes('fa-video')) {
                alert('🎥 Starting video call...\n\nImagine we\'re on a Zoom call and I\'m explaining my Python automation scripts with way too much enthusiasm! 😄');
            } else if (classList.includes('fa-ellipsis')) {
                alert('⚙️ More options:\n\n• Mute conversation\n• Block (why would you do that? 😢)\n• Report (for being too awesome?)\n• Delete conversation\n\nAll features are currently disabled because this is a parody site!');
            } else if (classList.includes('fa-pen-to-square')) {
                alert('✍️ New message...\n\nYou can only message me here! I\'m the entire network. 😂');
            } else if (classList.includes('fa-plus')) {
                alert('📎 Attachments:\n\n• Photo\n• Video\n• File\n• GIF\n\nAll disabled because this is a demo! But imagine sending me your resume. 📄');
            } else if (classList.includes('fa-face-smile')) {
                alert('😊 Emoji picker coming soon!\n\nFor now, just imagine I sent you: 👍 🔥 💯 🚀');
            } else if (classList.includes('fa-image') || classList.includes('fa-paperclip')) {
                alert('📁 File upload disabled!\n\nBut if it worked, I\'d probably send you screenshots of my Python code. 🐍');
            }
        });
    });
});
