var templates = {};

templates.profile = [
'<img src=<%= User.avatar_url %> />',
'<h1><%= User.name %></h1>',
'<h3><%= User.login %></h3>',
'<p><%= User.location %></p>',
'<p><%= User.created_at %></p>',
'<a href><%= User.followers_url %></a>',
'<p><%= User.following_url %></p>',
'<p><%= User.starred_url %></p>',
].join("");

templates.Repo = [
'<h2 class=\"reponame\"><%= name %></h2>',
'<p><%= updated_at %></p>',
'<p><%= language %></p>',
'<p><span class="octicon octicon-star"></span><%= stargazers_count %></p>',
'<p><span class="octicon octicon-git-branch"></span><%= forks %></p>'


].join("");

templates.Activity = [
'<% _.each(Activity, function(element, index, array) { %>',
'<% if (element.type === \"PushEvent\"){ %>',
'<span class=\"mega-octicon octicon-git-commit\"></span>',
'<a href=\"<%=element.actor.url%>\"><%= element.actor.login %></a>pushed to<a href=\"\">master</a> at <a href=\"<%=element.repo.url%>\"><%=element.repo.name%></a>',
'<br><a href=\"element.actor.url\"><img class = \"bigPic\" src=\"<%=element.actor.avatar_url%>\" alt=\"\"></a>',
'<img class=\"tinyPic\" src=\"<%=element.actor.avatar_url%>\" alt=\"\">',
'<a href=\"\"> <%= element.payload.head.split("").splice(0,8).join("") %></a>',
'<%= element.payload.commits[0].message %>',
  '<% } else { %>',
    '<% if (element.payload.ref_type === \"repository\"){ %>',
      '<span class=\"octicon octicon-repo\"></span>',
      '<a href=\"\"><%= element.actor.login %></a> created repository</p> <a href=\"\"><%=element.repo.name %></a>',
    '<% }else{ %>',
      '<span class=\"octicon octicon-git-branch\"></span>',
      '<a href=\"\"><%= element.actor.login %></a> created branch <a class=\"branch\" href=\"\"><span class=\"octicon octicon-git-branch\"> <%=element.payload.master_branch %></a> at <a href=\"\"><%=element.repo.name %></a>',
    '<% } %>',
    '<hr>',
    '<% } %>',
'<% }); %>'].join('');
