# 🎥 MERN Learning Video Viewer

A single-page web application to view all MERN stack learning videos in one place with an intuitive interface.

## 📋 Features

- **All Videos in One Place**: Browse all 44 learning videos in a beautiful grid layout
- **Smart Search**: Search by task ID, title, or description
- **Category Filter**: Filter videos by category (HTML, CSS, JavaScript, React, Node.js, etc.)
- **Video Preview**: Click any video card to watch it in a modal player
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Google Drive Integration**: All videos are embedded directly from Google Drive

## 🚀 How to Use

1. **Open the Application**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance

2. **Browse Videos**:
   - Scroll through the grid to see all available videos
   - Each card shows the task ID, title, and description

3. **Search**:
   - Use the search box to find specific videos by name or task ID
   - Results update in real-time as you type

4. **Filter by Category**:
   - Use the dropdown menu to filter videos by category
   - Categories: Web Dev Fundamentals, HTML, CSS, JavaScript, React, Node.js

5. **Watch Videos**:
   - Click on any video card to open it in the modal player
   - Videos play directly from Google Drive
   - Press ESC or click the X button to close the modal

## 📁 File Structure

```
video-viewer-app/
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── videoData.js        # Video data from Excel file
├── app.js              # Application logic
└── README.md           # This file
```

## 🎨 Categories

The videos are organized into 6 main categories:

1. **Web Development Fundamentals** (5 videos)
   - Web development overview
   - Git and version control
   - SDLC
   - React introduction

2. **HTML Basics** (10 videos)
   - Formatting tags
   - Tables and lists
   - iFrames
   - Multimedia files

3. **CSS Fundamentals** (11 videos)
   - CSS implementation
   - Selectors and styling
   - Layouts and grids
   - Hover effects

4. **JavaScript Essentials** (10 videos)
   - Data types
   - Loops and operators
   - Array and object methods
   - Async programming

5. **React & Advanced Topics** (6 videos)
   - Components and props
   - React hooks
   - Redux integration
   - Routing

6. **Node.js** (2 videos)
   - Node.js basics
   - Project architecture

## 🔧 Technical Details

### Video Embedding
- Videos are embedded from Google Drive using the preview URL format
- Automatic conversion of share links to embeddable format
- Responsive iframe sizing for different screen sizes

### Search & Filter
- Real-time search with instant results
- Case-insensitive search across title, description, and task ID
- Combined search and category filtering

### Performance
- Lightweight vanilla JavaScript (no frameworks required)
- CSS animations for smooth transitions
- Optimized grid layout with CSS Grid

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 💡 Tips

- Use the search bar to quickly find specific topics
- Filter by category to focus on one learning area
- The modal player supports fullscreen mode
- All videos are stored on Google Drive for reliable access

## 🎯 Learning Path

Follow the task IDs in order for a structured learning experience:
1. Start with Web Dev Fundamentals (2466-2496)
2. Master HTML (2658-2957)
3. Learn CSS (2993-3353)
4. Practice JavaScript (3281-3347)
5. Build with React (3359-3660)
6. Complete with Node.js (3365, 3599)

## 📞 Support

If you encounter any issues:
- Make sure you have internet connection (videos stream from Google Drive)
- Try a different browser if videos don't load
- Clear your browser cache and reload the page

---

**Happy Learning! 🚀**

Last Updated: January 2, 2026
