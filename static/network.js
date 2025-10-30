// Network Page Interactive Functionality

document.addEventListener('DOMContentLoaded', () => {
    // Follow button functionality
    const followButtons = document.querySelectorAll('.btn-follow');

    followButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Follow')) {
                this.innerHTML = '<i class="fa-solid fa-check"></i> Following';
                this.style.borderColor = '#00000099';
                this.style.color = '#00000099';
            } else {
                this.innerHTML = '<i class="fa-solid fa-plus"></i> Follow';
                this.style.borderColor = '#00000033';
                this.style.color = '#00000099';
            }
        });
    });
});

// Handle connect button clicks
function handleConnect(button, personName) {
    const messages = {
        'Future Thomas': 'Connection request sent to Future Thomas! 🚀\n\nHe says: "Thanks! I\'m still building DionCorp. Working on automating EVERYTHING. Call me when you catch up."',
        'Past Thomas': 'Connection request sent to Past Thomas! 🎓\n\nHe says: "Wait... I can become an Account Manager AND still code? Tell me more!"',
        'Clone #1': 'Connection request sent to Clone #1! 🤔\n\nSystem error: This person is just you without the Python skills. Connection rejected for your own sanity.',
        'Dion Thomas': 'Connection request sent to Dion Thomas! 🧐\n\nHe replied: "Did you just swap your first and last name? This is getting weird..."',
        'AI Bot': 'Connection request sent to Thomas AI Bot! 🤖\n\nAutomatic response: "I\'m literally you, automated. We\'re already connected via localhost:3000. Also, I don\'t sleep."',
        'Ronaldo': 'Connection request sent to Ronaldo! ⚽\n\nHis agent responded: "Mr. Ronaldo is confused. He doesn\'t work in sales. SIUUUUUU!"'
    };

    const message = messages[personName] || `Connection request sent to ${personName}!`;
    alert(message);

    // Change button state
    button.innerHTML = '<i class="fa-solid fa-check"></i> Pending';
    button.style.backgroundColor = '#00000099';
    button.style.color = 'white';
    button.style.borderColor = '#00000099';
    button.disabled = true;
    button.style.cursor = 'not-allowed';

    // Add a subtle animation
    button.parentElement.style.animation = 'pulse 0.5s ease-out';
}

// Add pulse animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.02);
        }
        100% {
            transform: scale(1);
        }
    }

    .btn-connect:disabled {
        opacity: 0.7;
    }
`;
document.head.appendChild(style);
