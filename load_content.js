function show_full_post(post_alias) {
    eval('document.write("<h1>" + POST_'+post_alias+'.title + "</h2>")')
    eval('document.write("<h3>" + POST_'+post_alias+'.date + "</h3>")')
    eval('document.write(POST_'+post_alias+'.content)')
    eval('document.write("<br><br><b>Palavras-chave:</b> " + POST_'+post_alias+'.keywords)')

}

function show_post_abstract(post_alias) {
		eval('document.write("<h1>" + POST_'+post_alias+'.title + "</h2>")');
		eval('document.write("<h3>" + POST_'+post_alias+'.date + "</h3>")');
		eval('document.write(POST_'+post_alias+'.description)');
    str = "'?post="+post_alias+"'";
    eval('document.write("<br><br><a href='+str+' >Ver mais... </a>")');

}

function show_post_prop(post_alias, prop) {
  // this shows the specified post property without any formatting.
		eval('document.write(POST_'+post_alias+'.'+prop+')');
}

current_url = window.location.href
		if (current_url.includes("?post=")){
		    try {
		    current_url = current_url.split("?post=")
		    current_url = current_url[1]
          if (current_url == "sidebar") {
            show_post_prop(current_url, "content")
          }
          else
          {
            show_full_post(current_url)
          }
        }
		    catch (e) {
		    document.write("<h2> Erro 404 </h2> <h3> Página não encontrada! </h3>")
		    }
		}
		else {
	
      show_post_abstract("hello_world")
      show_post_abstract("lorem_ipsum")

		}
