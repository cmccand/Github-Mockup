var templates = {};

templates.profile = [
'<img src=<%= User.avatar_url %> />',
'<h1><%= User.name %></h1>',
'<h3><%= User.login %></h3>',
'<p><%= User.location %></p>',
'<p><%= User.created_at %></p>',
'<a href><%= User.followers_url %></a>',
'<p><%= User.following_url %></p>',
'<p><%= User.starred_url %></p>'

].join("");

templates.Repo = [
'<h2><%= name %></h2>',
'<p><%= updated_at %></p>',
'<p><%= language %></p>',
'<p><span class="octicon octicon-star"></span><%= stargazers_count %></p>',
'<p><span class="octicon octicon-git-branch"></span><%= forks %></p>',


].join("");

templates.Activity = [
'<p><%=  %></p>'

].join("");
