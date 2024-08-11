		current_url = window.location.href
		if (current_url.includes("https://pedroh99z.github.io/?post=")){
		    try {
		    current_url = current_url.split("https://pedroh99z.github.io/?post=")
		    current_url = current_url[1]
          if (current_url == "sidebar") {
            eval('document.write(window.POST_'+current_url+'[2])')
          }
          else
          {
		    eval('document.write("<h1>" + window.POST_'+current_url+'[0] + "</h2>")')
		    eval('document.write("<h3>" + window.POST_'+current_url+'[1] + "</h3>")')
		    eval('document.write(window.POST_'+current_url+'[2])')
		    }
        }
		    catch (e) {
		    document.write("<h2> Erro 404 </h2> <h3> Página não encontrada! </h3>")
		    }
		}
		else {
		
		document.write("<h1>" + window.POST_hello_world[0] + "</h2>")
		document.write("<h3>" + window.POST_hello_world[1] + "</h3>")
		document.write(window.POST_hello_world[2])
		
		document.write("<h1>" + window.POST_lorem_ipsum[0] + "</h2>")
		document.write("<h3>" + window.POST_lorem_ipsum[1] + "</h3>")
		document.write(window.POST_lorem_ipsum[2])

		}
