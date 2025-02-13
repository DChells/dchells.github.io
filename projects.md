---
layout: default
title: Projects
---

# Projects

<div class="projects-container">
  {% for project in site.data.projects %}
    <div class="project-card">
      <div class="project-header" onclick="toggleProject(this)">
        <h2>{{ project.name }}</h2>
        <p class="project-description">{{ project.description }}</p>
        <div class="expand-icon">+</div>
      </div>
      
      <div class="project-details">
        {% if project.image %}
          <img src="{{ project.image }}" alt="{{ project.name }}" class="project-image">
        {% endif %}
        
        <div class="tech-stack">
          <h3>Technologies</h3>
          <ul>
            {% for tech in project.tech_stack %}
              <li>{{ tech }}</li>
            {% endfor %}
          </ul>
        </div>
        
        {% if project.features and project.features.size > 0 %}
        <div class="project-features">
          <h3>Key Features</h3>
          <ul>
            {% for feature in project.features %}
              <li>{{ feature }}</li>
            {% endfor %}
          </ul>
        </div>
        {% endif %}
        
        <div class="project-links">
          {% if project.github_url %}
            <a href="{{ project.github_url }}" class="button" target="_blank">View on GitHub</a>
          {% endif %}
          
          {% if project.demo_url %}
            <a href="{{ project.demo_url }}" class="button" target="_blank">Live Demo</a>
          {% endif %}
        </div>
        
        {% if project.readme %}
          <div class="project-readme">
            <div class="readme-header" onclick="toggleReadme(this)">
              <h3>Project README</h3>
              <span class="readme-toggle">Show README ▼</span>
            </div>
            <div class="readme-content">
              {{ project.readme | markdownify }}
            </div>
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

<style>
.projects-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.project-header {
  padding: 1.5rem;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: background-color 0.2s ease;
}

.project-header:hover {
  background-color: #f8f9fa;
}

.project-header h2 {
  margin: 0;
  color: #2c3e50;
}

.expand-icon {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: #6c757d;
  transition: transform 0.3s ease;
}

.project-card.expanded .expand-icon {
  transform: translateY(-50%) rotate(45deg);
}

.project-description {
  color: #666;
  margin: 0;
  padding-right: 2rem;
}

.project-details {
  display: none;
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid #eee;
}

.project-card.expanded .project-details {
  display: block;
  animation: slideDown 0.3s ease-out;
}

.project-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
  margin: 1rem 0;
}

.tech-stack ul,
.project-features ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.tech-stack li {
  display: inline-block;
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  margin: 0.25rem;
  font-size: 0.9rem;
  color: #2c3e50;
}

.project-links {
  margin: 1.5rem 0;
  display: flex;
  gap: 1rem;
}

.button {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-weight: 500;
}

.button:hover {
  background: #0056b3;
  transform: translateY(-1px);
}

.project-readme {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.readme-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0;
}

.readme-header h3 {
  margin: 0;
}

.readme-toggle {
  color: #007bff;
  font-size: 0.9rem;
}

.readme-content {
  display: none;
  padding-top: 1rem;
}

.readme-content.show {
  display: block;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .projects-container {
    padding: 1rem;
  }
  
  .project-header {
    padding: 1rem;
  }
  
  .project-details {
    padding: 0 1rem 1rem;
  }
}
</style>

<script>
function toggleProject(header) {
  const card = header.parentElement;
  const wasExpanded = card.classList.contains('expanded');
  
  // Close all other projects
  document.querySelectorAll('.project-card.expanded').forEach(expandedCard => {
    if (expandedCard !== card) {
      expandedCard.classList.remove('expanded');
      // Hide all readme content when closing projects
      expandedCard.querySelectorAll('.readme-content').forEach(content => {
        content.classList.remove('show');
      });
      expandedCard.querySelectorAll('.readme-toggle').forEach(toggle => {
        toggle.textContent = 'Show README ▼';
      });
    }
  });
  
  // Toggle current project
  if (!wasExpanded) {
    card.classList.add('expanded');
    // Scroll the expanded card into view with some padding
    setTimeout(() => {
      const headerRect = header.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: scrollTop + headerRect.top - 20,
        behavior: 'smooth'
      });
    }, 100);
  } else {
    card.classList.remove('expanded');
    // Hide readme content when closing project
    card.querySelectorAll('.readme-content').forEach(content => {
      content.classList.remove('show');
    });
    card.querySelectorAll('.readme-toggle').forEach(toggle => {
      toggle.textContent = 'Show README ▼';
    });
  }
}

function toggleReadme(header) {
  const content = header.nextElementSibling;
  const toggle = header.querySelector('.readme-toggle');
  const isShown = content.classList.contains('show');
  
  if (isShown) {
    content.classList.remove('show');
    toggle.textContent = 'Show README ▼';
  } else {
    content.classList.add('show');
    toggle.textContent = 'Hide README ▲';
  }
  
  // Prevent the project card from collapsing when clicking the readme toggle
  event.stopPropagation();
}
</script>
