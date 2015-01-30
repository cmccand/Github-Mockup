 var GitReal = {
   init: function (){
     GitReal.renderProfile(User);
     GitReal.allRepo(Repo);
     GitReal.allActivity(Activity);

   },

renderProfile: function() {
 var prof = _.template(templates.profile);
 $('.profile').append(prof);
},

 /*var Reponame = _.map(Repo, _.iteratee('name'));*/
 addRepo: function (Repo, index, array) {
   Repo.idx = index;
   var compiled = _.template(templates.Repo);
   $('.repo').append(compiled(Repo));

 },

 allRepo: function(repoInfo) {
   repoInfo.forEach(GitReal.addRepo);

 },

 allActivity: function (Activity, index, array) {
   Activity.idx = index;
   var Act = _.template(templates.Activity);
   $('.activity').append(Act(Activity));

 }

};

$(document).ready(function(){

GitReal.init();

$('.activeClass a').click(function(event){
  event.preventDefault();

  var relatedClass = "." + $(this).attr('rel');
  $(this).closest('li').siblings().removeClass('activeNav');
  $(this).closest('li').addClass('activeNav');
  $(relatedClass).siblings().removeClass('active');
  $(relatedClass).addClass('active');
});

});
