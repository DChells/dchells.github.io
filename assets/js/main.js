// assets/js/main.js

document.addEventListener("DOMContentLoaded", function() {
    const apiURL = "https://api.github.com/users/DChells/repos";
    const repoContainer = document.getElementById("repo-container");
  
    // Fetch your public repositories
    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then(repos => {
        // Clear the loading message
        repoContainer.innerHTML = "";
  
        // Sort repositories (optional) by updated date
        repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  
        // Display each repository in a styled card
        repos.forEach(repo => {
          // Create a container for the repo
          const repoDiv = document.createElement("div");
          repoDiv.className = "repo-card";
  
          // Build the repository's inner HTML
          repoDiv.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description ? repo.description : "No description provided."}</p>
            <p>⭐ ${repo.stargazers_count} | Forks: ${repo.forks_count}</p>
          `;
  
          // Append the repository card to the container
          repoContainer.appendChild(repoDiv);
        });
      })
      .catch(error => {
        repoContainer.innerHTML = `<p>Error fetching repositories: ${error.message}</p>`;
        console.error("Error fetching repositories:", error);
      });
  });
  