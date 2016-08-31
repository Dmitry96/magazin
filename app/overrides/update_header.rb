Deface::Override.new(:virtual_path => "spree/shared/_header", 
                     :name => "change header add Hello World", 
                     :replace => "figure#logo") do "<h1 id='logo'> Hello </h1>" end


Deface::Override.new(:virtual_path => "spree/layouts/spree_application", 
                    :name => "add footer", 
                    :insert_after => "body") do 
					'<footer class="footer">
 						<div class="container">
  	 						<p class="text-muted">Place sticky footer content here.</p>
 						</div>
					</footer>'
  				end