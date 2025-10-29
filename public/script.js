// Interactive functionality for LinkedOut portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Like button functionality
    const actionButtons = document.querySelectorAll('.action-btn');

    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.querySelector('span').textContent;

            if (buttonText === 'Like') {
                const icon = this.querySelector('i');
                const span = this.querySelector('span');

                if (this.classList.contains('liked')) {
                    this.classList.remove('liked');
                    icon.style.color = '#00000099';
                    span.style.color = '#00000099';
                } else {
                    this.classList.add('liked');
                    icon.style.color = '#0a66c2';
                    span.style.color = '#0a66c2';

                    // Add animation
                    icon.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        icon.style.transform = 'scale(1)';
                    }, 200);
                }
            } else if (buttonText === 'Comment') {
                alert('💬 Comment feature coming soon! For now, just imagine you wrote something insightful.');
            } else if (buttonText === 'Share') {
                alert('🔄 Shared to the void! Your network of 0 connections will definitely see this.');
            } else if (buttonText === 'Send') {
                alert('📤 Sent! (Just kidding, sent to nobody because this is a parody site)');
            }
        });
    });

    // Post creator functionality
    const postCreatorInput = document.querySelector('.post-creator-input input');

    if (postCreatorInput) {
        postCreatorInput.addEventListener('click', function() {
            const response = prompt('Share your completely unoriginal thoughts:\n\n(This will appear at the top of your feed)');

            if (response && response.trim()) {
                createNewPost(response);
            }
        });
    }

    // Creator action buttons
    const creatorActions = document.querySelectorAll('.creator-action');

    creatorActions.forEach(button => {
        button.addEventListener('click', function() {
            const actionType = this.querySelector('span').textContent;

            if (actionType === 'Photo') {
                alert('📷 Photo upload coming soon! For now, just describe the photo in words.');
            } else if (actionType === 'Video') {
                alert('🎥 Video upload coming soon! Nobody watches LinkedIn videos anyway.');
            } else if (actionType === 'Event') {
                alert('📅 Event creation coming soon! "Fake it till you make it" workshop, anyone?');
            } else if (actionType === 'Write article') {
                alert('📝 Article writing coming soon! 10 tips for pretending to be productive.');
            }
        });
    });

    // Navigation items
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const itemName = this.querySelector('span') ? this.querySelector('span').textContent : 'Item';

            if (itemName === 'Home') {
                alert('🏠 You\'re already home! There\'s nowhere to go.');
            } else if (itemName === 'Network') {
                alert('👥 Network: 0 connections (and counting down)');
            } else if (itemName === 'Jobs') {
                alert('💼 Job recommendations: Senior Meme Engineer, Chief Procrastination Officer');
            } else if (itemName === 'Messaging') {
                alert('💬 Messages: Just recruiters asking if you know JavaScript. You said yes. It was a lie.');
            } else if (itemName === 'Notifications') {
                alert('🔔 Notifications: Someone you don\'t know celebrated a work anniversary!');
            } else if (itemName.includes('Me')) {
                alert('👤 Profile: Professional Imposter Syndrome Sufferer');
            }
        });
    });

    // News items
    const newsItems = document.querySelectorAll('.news-item');

    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            const headline = this.querySelector('h5').textContent;
            alert(`📰 ${headline}\n\nClick bait article with 15 slides and 47 ads. You didn't miss anything.`);
        });
    });

    // Show more button
    const showMoreBtn = document.querySelector('.show-more');

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            alert('📊 More trending news:\n\n• Junior dev discovers Stack Overflow\n• Company culture described as "like a family" (red flag)\n• Developer deploys on Friday, regrets it immediately\n• "Synergy" used 847 times in one meeting');
        });
    }

    // Promote button
    const promoteBtn = document.querySelector('.promote-btn');

    if (promoteBtn) {
        promoteBtn.addEventListener('click', function() {
            alert('💰 Promote your post for just $99.99!\n\nReach 10,000 people who will scroll past it anyway.');
        });
    }

    // Profile stats
    const statItems = document.querySelectorAll('.stat-item');

    statItems.forEach(item => {
        item.addEventListener('click', function() {
            const label = this.querySelector('.stat-label').textContent;

            if (label === 'Profile viewers') {
                alert('👀 Profile viewers:\n\n1. You (checking if it looks good)\n2. You again (from incognito mode)\n3. Still you (from your phone)');
            } else if (label === 'Post impressions') {
                alert('📈 Post impressions:\n\nMostly depression, some anxiety, occasional existential dread.');
            }
        });
    });
});

// Function to create a new post
function createNewPost(content) {
    const feed = document.querySelector('.feed');
    const postCreator = document.querySelector('.post-creator');

    const newPost = document.createElement('div');
    newPost.className = 'card post';
    newPost.style.animation = 'slideIn 0.3s ease-out';

    newPost.innerHTML = `
        <div class="post-header">
            <div class="post-avatar">ME</div>
            <div class="post-author-info">
                <h4>Your Name</h4>
                <p>Thought Leader in Overthinking</p>
                <p class="post-time">Just now • <i class="fa-solid fa-earth-americas"></i></p>
            </div>
            <button class="post-menu"><i class="fa-solid fa-ellipsis"></i></button>
        </div>
        <div class="post-content">
            <p>${escapeHtml(content)}</p>
        </div>
        <div class="post-stats">
            <div class="post-reactions">
                <div class="reaction-icons">
                    <span class="reaction-icon">👍</span>
                </div>
                <span>Just you</span>
            </div>
            <div class="post-counts">
                <span>0 comments</span>
            </div>
        </div>
        <div class="post-actions">
            <button class="action-btn">
                <i class="fa-solid fa-thumbs-up"></i>
                <span>Like</span>
            </button>
            <button class="action-btn">
                <i class="fa-solid fa-comment"></i>
                <span>Comment</span>
            </button>
            <button class="action-btn">
                <i class="fa-solid fa-share"></i>
                <span>Share</span>
            </button>
            <button class="action-btn">
                <i class="fa-solid fa-paper-plane"></i>
                <span>Send</span>
            </button>
        </div>
    `;

    // Insert after post creator
    postCreator.after(newPost);

    // Add event listeners to new post buttons
    const newActionButtons = newPost.querySelectorAll('.action-btn');
    newActionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.querySelector('span').textContent;

            if (buttonText === 'Like') {
                const icon = this.querySelector('i');
                const span = this.querySelector('span');

                if (this.classList.contains('liked')) {
                    this.classList.remove('liked');
                    icon.style.color = '#00000099';
                    span.style.color = '#00000099';
                } else {
                    this.classList.add('liked');
                    icon.style.color = '#0a66c2';
                    span.style.color = '#0a66c2';
                    icon.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        icon.style.transform = 'scale(1)';
                    }, 200);
                }
            } else if (buttonText === 'Comment') {
                alert('💬 Comment feature coming soon!');
            } else if (buttonText === 'Share') {
                alert('🔄 Shared to the void!');
            } else if (buttonText === 'Send') {
                alert('📤 Sent to nobody!');
            }
        });
    });

    // Scroll to new post
    newPost.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .action-btn i,
    .action-btn span {
        transition: all 0.2s;
    }
`;
document.head.appendChild(style);
