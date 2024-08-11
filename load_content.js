		current_url = window.location.href
		if (current_url.includes("?post=")){
		    try {
		    current_url = current_url.split("?post=")
		    current_url = current_url[1]
          if (current_url == "sidebar") {
            eval('document.write(POST_'+current_url+'.content)')
          }
          else
          {
		    eval('document.write("<h1>" + POST_'+current_url+'.title + "</h2>")')
		    eval('document.write("<h3>" + POST_'+current_url+'.date + "</h3>")')
		    eval('document.write(POST_'+current_url+'.content)')
		    eval('document.write("<br><br>Palavras-chave: " + POST_'+current_url+'.keywords)')
		    }
        }
		    catch (e) {
		    document.write("<h2> Erro 404 </h2> <h3> Página não encontrada! </h3>")
		    }
		}
		else {
	
		document.write("<h1>" + POST_hello_world.title + "</h2>")
		document.write("<h3>" + POST_hello_world.date + "</h3>")
		document.write(POST_hello_world.description)
    document.write("<br><a href='?post=hello_world' >Ver mais... </a>")
		
		document.write("<h1>" + POST_lorem_ipsum.title + "</h2>")
		document.write("<h3>" + POST_lorem_ipsum.date + "</h3>")
		document.write(POST_lorem_ipsum.description)
    document.write("<br><a href='?post=lorem_ipsum' >Ver mais... </a>")

		}
