Deface::Override.new(:virtual_path => "spree/shared/_header", 
<<<<<<< HEAD
                     :name => "change header add h3 Store ", 
                     :replace => "figure#logo") do "<a id='logo' class='navbar-brand' href='/'> Store </a>" end

Deface::Override.new(:virtual_path => "spree/shared/_taxonomies", 
                     :name => "change taxon partioal", 
                     :replace => "h4.taxonomy-root") do 
											"<a>Hello</a>"
											end
# <%= taxons_tree(taxonomy.root, @taxon, max_level) %>
Deface::Override.new(:virtual_path => "spree/layouts/spree_application", 
                     :name => "add footer", 
                     :insert_after => "body") do 
											"<footer id='footer'>
												<div class='container'>
												  <p class=''>Place sticky footer content here.</p>
												</div>
											</footer>"
											end

=======
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
>>>>>>> c4ec77238f54b2455f476e7db2c4afa5a164b7e9
