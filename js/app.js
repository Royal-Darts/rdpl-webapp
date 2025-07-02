// app.js

// Highlight active nav link based on current page URL
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});

// Helper: Create element with classes and text
function createEl(type, classes = [], text = '') {
  const el = document.createElement(type);
  if (classes.length) el.classList.add(...classes);
  if (text) el.textContent = text;
  return el;
}

// Fetch JSON with error handling
async function fetchJSON(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Fetch error:', err);
    return null;
  }
}

// Format ISO date string to readable date
function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

// Format ISO time string (HH:MM)
function formatTime(timeStr) {
  const d = new Date(`1970-01-01T${timeStr}Z`);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}