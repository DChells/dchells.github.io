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
