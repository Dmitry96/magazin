Deface::Override.new(:virtual_path => "spree/shared/_header", 
                     :name => "change header add Hello World", 
                     :replace => "figure#logo") do "<h1 id='logo'> Hello </h1>" end