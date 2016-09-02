Deface::Override.new(:virtual_path => "static_pages/about", 
                   :name => "add header", 
                   :insert_before => "div.container",
                   :partial => "spree/shared/header")                                


Deface::Override.new(:virtual_path => "static_pages/about", 
                   :name => "add footer", 
                   :insert_after => "div.container") do
					'<footer id="footer">
 						<div class="container">
  	 						<p class="text-muted">Place sticky footer content here.</p>
 						</div>
					</footer>'
end






Deface::Override.new(:virtual_path => "static_pages/policy", 
                   :name => "add header", 
                   :insert_before => "div.container",
                   :partial => "spree/shared/header")                                


Deface::Override.new(:virtual_path => "static_pages/policy", 
                   :name => "add footer", 
                   :insert_after => "div.container") do
					'<footer id="footer">
 						<div class="container">
  	 						<p class="text-muted">Place sticky footer content here.</p>
 						</div>
					</footer>'
end				







Deface::Override.new(:virtual_path => "static_pages/user_agreement", 
                   :name => "add header", 
                   :insert_before => "div.container",
                   :partial => "spree/shared/header")                                


Deface::Override.new(:virtual_path => "static_pages/user_agreement", 
                   :name => "add footer", 
                   :insert_after => "div.container") do
					'<footer id="footer">
 						<div class="container">
  	 						<p class="text-muted">Place sticky footer content here.</p>
 						</div>
					</footer>'
end