---
layout: default
title: Home
---

<div class="hero-section">
  <h1 class="hero-title">Daniel Chelling</h1>
  <p class="hero-subtitle">Data Analytics Professional</p>
  <p class="hero-description">B.S. in Data Analytics from Chapman University, specializing in machine learning, statistical analysis, and data visualization.</p>
</div>

<section class="skills-section">
  <h2>Technical Skills</h2>
  <div class="skills-grid">
    <div class="skill-category">
      <h3>Programming</h3>
      <ul>
        <li>Python</li>
        <li>R</li>
        <li>JavaScript</li>
        <li>Solidity</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3>Data Science & ML</h3>
      <ul>
        <li>TensorFlow/Keras</li>
        <li>XGBoost</li>
        <li>Statistical Modeling</li>
        <li>LSTM Networks</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3>Visualization</h3>
      <ul>
        <li>R Shiny</li>
        <li>ggplot2</li>
        <li>Leaflet</li>
        <li>Matplotlib</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3>Web Development</h3>
      <ul>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>REST APIs</li>
      </ul>
    </div>
  </div>
</section>

<section class="featured-projects">
  <h2>Featured Projects</h2>
  {% assign featured_projects = site.data.projects | slice: 0, 3 %}
  <div class="project-grid">
    {% for project in featured_projects %}
    <div class="project-preview">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <div class="tech-tags">
        {% for tech in project.tech_stack | slice: 0, 4 %}
        <span class="tech-tag">{{ tech }}</span>
        {% endfor %}
      </div>
      <a href="{{ '/projects' | relative_url }}#{{ project.name | slugify }}" class="project-link">View Details</a>
    </div>
    {% endfor %}
  </div>
  <a href="{{ '/projects' | relative_url }}" class="view-all-btn">View All Projects</a>
</section>

<section class="contact-section">
  <h2>Get in Touch</h2>
  <div class="contact-links">
    <a href="mailto:danielchelling@gmail.com" class="contact-link">
      <span class="link-label">Email</span>
      <span class="link-value">danielchelling@gmail.com</span>
    </a>
    <a href="https://www.linkedin.com/in/daniel-chelling-501a71200/" class="contact-link" target="_blank" rel="noopener">
      <span class="link-label">LinkedIn</span>
      <span class="link-value">daniel-chelling</span>
    </a>
    <a href="https://github.com/DChells" class="contact-link" target="_blank" rel="noopener">
      <span class="link-label">GitHub</span>
      <span class="link-value">@DChells</span>
    </a>
    <a href="{{ '/resume' | relative_url }}" class="contact-link">
      <span class="link-label">Resume</span>
      <span class="link-value">Download PDF</span>
    </a>
  </div>
</section>
