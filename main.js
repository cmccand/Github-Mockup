 var GitReal = {
   init: function (){
     GitReal.renderProfile(User);
     GitReal.allRepo(Repo);
     GitReal.allActivity(Activity);

   },

renderProfile: function() {
 var prof = _.template(templates.profile);
 $('body').append(prof);
},

 /*var Reponame = _.map(Repo, _.iteratee('name'));*/
 addRepo: function (Repo, index, array) {
   Repo.idx = index;
   var compiled = _.template(templates.Repo);
   $('body').append(compiled(Repo));

 },

 allRepo: function(repoInfo) {
   repoInfo.forEach(GitReal.addRepo);

 },

 renderActivity: function (Activity, index, array) {
   Activity.idx = index;
   var Act = _.template(templates.Activity);
   $('body').append(Act(Activity));

 },

 allActivity: function(activityInfo) {
   activityInfo.forEach(GitReal.renderActivity);

 }

};

$(document).ready(function(){

GitReal.init();

});
