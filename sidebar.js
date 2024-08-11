var sidebar_content = '\
<h2>Lorem</h2>\
			<p>Nulla malesuada pellentesque elit eget. Mauris vitae ultricies leo integer malesuada nunc vel risus. Egestas tellus rutrum tellus pellentesque eu. Bibendum at varius vel pharetra vel turpis. Turpis tincidunt id aliquet risus feugiat in ante metus. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Sit amet volutpat consequat mauris nunc congue nisi. Gravida dictum fusce ut placerat orci nulla. Lorem ipsum dolor sit amet consectetur adipiscing. Sodales neque sodales ut etiam sit amet. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Justo donec enim diam vulputate ut pharetra.\
</p>\
\
			<hr>\
			<h2>Ipsum</h2>\
			<p>Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Egestas purus viverra accumsan in nisl nisi. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Consectetur a erat nam at lectus urna duis convallis. Non arcu risus quis varius. Leo vel orci porta non. Urna duis convallis convallis tellus id interdum velit laoreet id. Tincidunt id aliquet risus feugiat in ante metus dictum. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Convallis tellus id interdum velit laoreet id donec ultrices. Mi proin sed libero enim sed faucibus turpis in eu.\
</p>\
';

const date = new Date();

if (date.getMonth() + 1 == 10) {
  var sidebar_content = '<br><iframe width="250" height="150" src="https://www.youtube.com/embed/ZVuToMilP0A?si=6zhgbrBdlLrzIXQz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <br>' + sidebar_content
}

if (date.getMonth() + 1 == 12 && date.getDay() >= 24) || (date.getMonth() + 1 == 1 && date.getDay() == 1) {
  var sidebar_content = '<br><iframe width="250" height="150" src="https://www.youtube.com/embed/g-OF7KGyDis?si=BPyzPu3XU10jCWCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br>' + sidebar_content
}


