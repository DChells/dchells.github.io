---
layout: default
title: Home
---

# Daniel Chelling

## About Me

I'm Daniel Chelling a data analytics professional. I earned my B.S. in Data Analytics from Chapman University and am furthering my expertise in Data Analytics. 

## Featured Projects

{% assign featured_projects = site.data.projects | slice: 0, 2 %}
{% for project in featured_projects %}
### {{ project.name }}
{{ project.description }}

**Technologies:** {% for tech in project.tech_stack | slice: 0, 3 %}{{ tech }}{% unless forloop.last %}, {% endunless %}{% endfor %}

[View Project Details →]({{ '/projects' | relative_url }}#{{ project.name | slugify }})

{% endfor %}

## Connect With Me

- ✉️ [Email](mailto:danielchelling@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/daniel-chelling-501a71200/)
- 💻 [GitHub](https://github.com/DChells)
- 📄 [Resume]({{ '/resume' | relative_url }})

<style>
/* Minimal styling to enhance readability while keeping it simple */
h1 {
  margin-bottom: 0.5rem;
}

h1 + p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

h2 {
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
}

h3 {
  margin-top: 1.5rem;
  color: #2c3e50;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  margin: 0.5rem 0;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
