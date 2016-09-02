Deface::Override.new(:virtual_path => "spree/shared/_header", 

                     :name => "change header add h3 Store ", 
                     :replace => "figure#logo") do "<a id='logo' class='navbar-brand' href='/'> Store </a>" end




# <%= taxons_tree(taxonomy.root, @taxon, max_level) %>
Deface::Override.new(:virtual_path => "spree/layouts/spree_application", 
                     :name => "add footer", 
                     :insert_after => "body") do 
												"<br/>
												<footer id='footer'>
													<div id='background'>

													<div class='container'>
															
													<div class='col-lg-3 col-md-3 col-sm-6'>
										            <div class='column'>
										            	<ul>
									                	<li><div class='footer_title'>Информация</div></li>
									                    
								                    <li><%= link_to 'Политика конфиденциальности', main_app.policy_path %></li>
								                    <li><%= link_to 'Пользовательское соглашение', main_app.user_agreement_path%></li>
                                    <li><%= link_to 'О нас'                      , main_app.about_path %></li>
									                </ul>
										            </div>
										        	</div>

										        	<div class='col-lg-3 col-md-3 col-sm-6'>
										            <div class='column'>
										            	<ul>
									                	<li><div class='footer_title'>Обслуживание клиентов</div></li>
								                    <li><a>Телефон: +38 (093) 763-81-16</a></li>
								                    <li><a href='mailto:info@shmot.com.ua'>Email: info@shmot.com.ua</a></li>
									                </ul>
										            </div>
										        	</div>


															<div class='col-lg-3 col-md-3 col-sm-6'>
										            <div class='column'>
										            	<ul class='social'>
									                	<li><div class='footer_title'>Социальные сети</div></li>
								                    <li><a href='https://vk.com/shmot_com_ua' target='_blank'>Вконтакте</a></li>
									                </ul>
									            	</div>
										        	</div>
										        	
														</div>
													</div>
												</footer>"
end
 
Deface::Override.new(:virtual_path => "spree/shared/_nav_bar", 
                  :name => "change header", 
                  :insert_after => "nav#top-nav-bar") do '    
                        <ul class="nav navbar-nav navbar-right" data-hook>
                             <li id="link-to-cart" data-hook>
                           <noscript>
                                 <%= link_to Spree.t(:cart), "/cart" %>
                           </noscript>
                               &nbsp;
                             </li>
                                 <script>Spree.fetch_cart()</script>
                       </ul>' 
                   end


Deface::Override.new(:virtual_path => "spree/shared/_main_nav_bar", 
                  :name => "delete main_nav_bar", 
                  :remove => "div#main-nav-bar")




Deface::Override.new(:virtual_path => "spree/shared/_nav_bar", 
                   :name => "change header", 
                   :insert_after => "nav#top-nav-bar") do  
						'<ul class="nav navbar-nav navbar-right" data-hook>
      						<li id="link-to-cart" data-hook>
        					<noscript>
          						<%= link_to Spree.t(:cart), "/cart" %>
        					</noscript>
        						&nbsp;
      						</li>
      							<script>Spree.fetch_cart()</script>
    					</ul>' 
end


Deface::Override.new(:virtual_path => "spree/shared/_main_nav_bar", 
                   :name => "delete main_nav_bar", 
                   :remove => "div#main-nav-bar")                                  

