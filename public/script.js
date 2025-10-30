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
        postCreatorInput.addEventListener('click', function(e) {
            e.preventDefault();
            openPostModal();
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

    // Navigation items - popup features removed
    // Nav items now use actual links defined in navbar.html partial

    // Notification bell - cheeky dropdown
    const notificationBell = document.querySelector('.nav-item:has(.fa-bell)');

    if (notificationBell) {
        // Create notification dropdown
        const notificationDropdown = document.createElement('div');
        notificationDropdown.className = 'notification-dropdown';
        notificationDropdown.innerHTML = `
            <div class="notification-header">
                <h3>Notifications</h3>
                <button class="mark-read-btn">Mark all as read</button>
            </div>
            <div class="notification-list">
                <div class="notification-item unread">
                    <div class="notification-avatar">TD</div>
                    <div class="notification-content">
                        <p><strong>You</strong> viewed your own profile</p>
                        <span class="notification-time">2 minutes ago</span>
                    </div>
                </div>
                <div class="notification-item unread">
                    <div class="notification-avatar">👻</div>
                    <div class="notification-content">
                        <p><strong>LinkedIn Ghost</strong> is impressed by your automation skills</p>
                        <span class="notification-time">1 hour ago</span>
                    </div>
                </div>
                <div class="notification-item">
                    <div class="notification-avatar">🤖</div>
                    <div class="notification-content">
                        <p><strong>Your Python Script</strong> generated 500 more leads while you slept</p>
                        <span class="notification-time">3 hours ago</span>
                    </div>
                </div>
                <div class="notification-item">
                    <div class="notification-avatar">☕</div>
                    <div class="notification-content">
                        <p><strong>Your Coffee Machine</strong> is running low. Productivity at risk!</p>
                        <span class="notification-time">5 hours ago</span>
                    </div>
                </div>
                <div class="notification-item">
                    <div class="notification-avatar">💼</div>
                    <div class="notification-content">
                        <p><strong>Recruiter #847</strong> wants to know if you're "open to opportunities"</p>
                        <span class="notification-time">Yesterday</span>
                    </div>
                </div>
                <div class="notification-item">
                    <div class="notification-avatar">🎉</div>
                    <div class="notification-content">
                        <p><strong>You</strong> celebrated exceeding quota. Again.</p>
                        <span class="notification-time">2 days ago</span>
                    </div>
                </div>
                <div class="notification-item">
                    <div class="notification-avatar">📊</div>
                    <div class="notification-content">
                        <p><strong>Someone you barely know</strong> celebrated a work anniversary!</p>
                        <span class="notification-time">3 days ago</span>
                    </div>
                </div>
            </div>
            <div class="notification-footer">
                <a href="#">See all notifications</a>
            </div>
        `;
        document.body.appendChild(notificationDropdown);

        // Toggle dropdown
        notificationBell.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Close if already open
            if (notificationDropdown.classList.contains('show')) {
                notificationDropdown.classList.remove('show');
                return;
            }

            // Position dropdown below the bell
            const rect = notificationBell.getBoundingClientRect();
            notificationDropdown.style.top = `${rect.bottom + 5}px`;
            notificationDropdown.style.right = `${window.innerWidth - rect.right}px`;

            // Show dropdown
            notificationDropdown.classList.add('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!notificationDropdown.contains(e.target) && e.target !== notificationBell) {
                notificationDropdown.classList.remove('show');
            }
        });

        // Mark all as read button
        const markReadBtn = notificationDropdown.querySelector('.mark-read-btn');
        markReadBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const unreadItems = notificationDropdown.querySelectorAll('.notification-item.unread');
            unreadItems.forEach(item => item.classList.remove('unread'));

            // Show a cheeky message
            setTimeout(() => {
                alert('📭 All notifications marked as read!\n\nJust kidding, they\'re all fake. But you feel productive now, right? 😎');
            }, 200);
        });

        // Add notification badge
        const badge = document.createElement('span');
        badge.className = 'notification-badge';
        badge.textContent = '7';
        notificationBell.style.position = 'relative';
        notificationBell.appendChild(badge);
    }

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
            <img src="/ronaldo.jpg" alt="Profile" class="post-avatar-img">
            <div class="post-author-info">
                <h4>Ronaldo</h4>
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

// Function to open post modal
function openPostModal() {
    const modal = document.createElement('div');
    modal.className = 'post-modal-overlay';
    modal.innerHTML = `
        <div class="post-modal">
            <div class="post-modal-header">
                <div class="post-modal-user">
                    <img src="/ronaldo.jpg" alt="Profile" class="post-modal-avatar">
                    <div>
                        <h4>Ronaldo</h4>
                        <p>Post to Anyone</p>
                    </div>
                </div>
                <button class="post-modal-close">&times;</button>
            </div>
            <div class="post-modal-body">
                <textarea placeholder="What do you want to talk about?" autofocus></textarea>
            </div>
            <div class="post-modal-footer">
                <div class="post-modal-actions">
                    <button class="post-modal-action" title="Add emoji">
                        <i class="fa-regular fa-face-smile"></i>
                    </button>
                    <button class="post-modal-action" title="Add photo">
                        <i class="fa-regular fa-image"></i>
                    </button>
                    <button class="post-modal-action" title="Add event">
                        <i class="fa-regular fa-calendar"></i>
                    </button>
                    <button class="post-modal-action" title="Celebrate an occasion">
                        <i class="fa-solid fa-trophy"></i>
                    </button>
                    <button class="post-modal-action" title="More">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <button class="post-modal-submit">Post</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Focus textarea
    setTimeout(() => {
        const textarea = modal.querySelector('textarea');
        textarea.focus();
    }, 100);

    // Close modal handlers
    const closeBtn = modal.querySelector('.post-modal-close');
    const overlay = modal;
    const submitBtn = modal.querySelector('.post-modal-submit');
    const textarea = modal.querySelector('textarea');

    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            modal.remove();
        }
    });

    // Submit post
    submitBtn.addEventListener('click', () => {
        const content = textarea.value.trim();
        if (content) {
            createNewPost(content);
            modal.remove();
        }
    });

    // Enable submit button only when there's content
    textarea.addEventListener('input', () => {
        if (textarea.value.trim()) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        } else {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';
        }
    });

    // Initially disable submit button
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.5';
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

    /* Post Modal Styles */
    .post-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.2s ease-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .post-modal {
        background: white;
        border-radius: 8px;
        width: 90%;
        max-width: 550px;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .post-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 20px;
        border-bottom: 1px solid #e0e0e0;
    }

    .post-modal-user {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .post-modal-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
    }

    .post-modal-user h4 {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        color: #000;
    }

    .post-modal-user p {
        margin: 4px 0 0 0;
        font-size: 13px;
        color: #666;
    }

    .post-modal-close {
        background: none;
        border: none;
        font-size: 28px;
        color: #666;
        cursor: pointer;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.2s;
    }

    .post-modal-close:hover {
        background: #f0f0f0;
    }

    .post-modal-body {
        padding: 20px;
        flex: 1;
        overflow-y: auto;
    }

    .post-modal-body textarea {
        width: 100%;
        min-height: 200px;
        border: none;
        outline: none;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        resize: none;
        color: #000;
    }

    .post-modal-body textarea::placeholder {
        color: #999;
    }

    .post-modal-footer {
        padding: 12px 20px;
        border-top: 1px solid #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .post-modal-actions {
        display: flex;
        gap: 8px;
    }

    .post-modal-action {
        background: none;
        border: none;
        padding: 8px;
        cursor: pointer;
        color: #666;
        font-size: 20px;
        border-radius: 4px;
        transition: background 0.2s;
    }

    .post-modal-action:hover {
        background: #f0f0f0;
    }

    .post-modal-submit {
        background: #0a66c2;
        color: white;
        border: none;
        padding: 10px 24px;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s, opacity 0.2s;
    }

    .post-modal-submit:hover:not(:disabled) {
        background: #004182;
    }

    .post-modal-submit:disabled {
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);
