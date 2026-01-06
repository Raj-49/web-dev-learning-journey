// App.js - Main application logic

// Convert Google Drive link to embeddable format
function convertToEmbedLink(driveLink) {
    // Extract file ID from the drive link
    const fileIdMatch = driveLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return driveLink;
}

// Get thumbnail URL for Google Drive video
function getThumbnailUrl(driveLink) {
    const fileIdMatch = driveLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        // Use Google Drive thumbnail API
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
    }
    return null;
}

// Create video card HTML
function createVideoCard(video) {
    const categoryBadge = categoryNames[video.category] || video.category;
    
    return `
        <div class="video-card" data-task-id="${video.taskId}" data-category="${video.category}">
            <div class="video-thumbnail">
                <span class="serial-number">#${video.serial}</span>
                <span class="category-badge">${categoryBadge}</span>
                <div class="play-icon">▶</div>
            </div>
            <div class="video-info">
                <span class="task-id">Task #${video.taskId}</span>
                <h3 class="video-title">${video.title}</h3>
                <p class="video-description">${video.description}</p>
            </div>
        </div>
    `;
}

// Render videos grouped by category
function renderVideos(videos) {
    const videoGrid = document.getElementById('videoGrid');
    
    if (videos.length === 0) {
        videoGrid.innerHTML = `
            <div class="no-results">
                <h2>No videos found</h2>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    // Group videos by category
    const categoryOrder = ['fundamentals', 'html', 'css', 'javascript', 'react', 'nodejs'];
    const groupedVideos = {};
    
    categoryOrder.forEach(cat => {
        groupedVideos[cat] = videos.filter(v => v.category === cat);
    });
    
    // Build HTML with sections
    let html = '';
    categoryOrder.forEach(category => {
        const categoryVideos = groupedVideos[category];
        if (categoryVideos.length > 0) {
            const categoryName = categoryNames[category] || category;
            html += `
                <div class="category-section">
                    <div class="category-header">
                        <h2 class="category-title">${categoryName}</h2>
                        <span class="category-count">${categoryVideos.length} video${categoryVideos.length !== 1 ? 's' : ''}</span>
                    </div>
                    <div class="category-grid">
                        ${categoryVideos.map(video => createVideoCard(video)).join('')}
                    </div>
                </div>
            `;
        }
    });
    
    videoGrid.innerHTML = html;
    
    // Add click event listeners to video cards
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', function() {
            const taskId = parseInt(this.getAttribute('data-task-id'));
            const video = videoData.find(v => v.taskId === taskId);
            if (video) {
                openVideoModal(video);
            }
        });
    });
}

// Open video in modal
function openVideoModal(video) {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalTaskId = document.getElementById('modalTaskId');
    const modalDescription = document.getElementById('modalDescription');
    const modaliframe = document.getElementById('modaliframe');
    
    modalTitle.textContent = video.title;
    modalTaskId.textContent = `Task #${video.taskId}`;
    modalDescription.textContent = video.description;
    
    // Convert drive link to embeddable format
    const embedLink = convertToEmbedLink(video.driveLink);
    modaliframe.src = embedLink;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Close modal
function closeModal() {
    const modal = document.getElementById('videoModal');
    const modaliframe = document.getElementById('modaliframe');
    
    modal.style.display = 'none';
    modaliframe.src = ''; // Stop video playback
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Search functionality
function searchVideos(searchTerm, category) {
    let filtered = videoData;
    
    // Filter by category
    if (category !== 'all') {
        filtered = filtered.filter(video => video.category === category);
    }
    
    // Filter by search term
    if (searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        filtered = filtered.filter(video => {
            return video.title.toLowerCase().includes(searchTerm) ||
                   video.description.toLowerCase().includes(searchTerm) ||
                   video.taskId.toString().includes(searchTerm);
        });
    }
    
    return filtered;
}

// Initialize app
function initApp() {
    // Render all videos initially
    renderVideos(videoData);
    
    // Update total count
    document.getElementById('totalVideos').textContent = videoData.length;
    
    // Search input event listener
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value;
        const category = categoryFilter.value;
        const filtered = searchVideos(searchTerm, category);
        renderVideos(filtered);
    });
    
    // Category filter event listener
    categoryFilter.addEventListener('change', function() {
        const category = this.value;
        const searchTerm = searchInput.value;
        const filtered = searchVideos(searchTerm, category);
        renderVideos(filtered);
    });
    
    // Modal close button
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    const modal = document.getElementById('videoModal');
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

// Run app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
