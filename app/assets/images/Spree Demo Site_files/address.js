(function() {
  Spree.ready(function($) {
    Spree.onAddress = function() {
      var getCountryId, order_use_billing, update_shipping_form_state;
      if (($('#checkout_form_address')).is('*')) {
        ($('#checkout_form_address')).validate();
        getCountryId = function(region) {
          return $('#' + region + 'country select').val();
        };
        Spree.updateState = function(region) {
          var countryId;
          countryId = getCountryId(region);
          if (countryId != null) {
            if (Spree.Checkout[countryId] == null) {
              return $.get(Spree.routes.states_search, {
                country_id: countryId
              }, function(data) {
                Spree.Checkout[countryId] = {
                  states: data.states,
                  states_required: data.states_required
                };
                return Spree.fillStates(Spree.Checkout[countryId], region);
              });
            } else {
              return Spree.fillStates(Spree.Checkout[countryId], region);
            }
          }
        };
        Spree.fillStates = function(data, region) {
          var selected, stateInput, statePara, stateSelect, stateSpanRequired, states, statesRequired, statesWithBlank;
          statesRequired = data.states_required;
          states = data.states;
          statePara = $('#' + region + 'state');
          stateSelect = statePara.find('select');
          stateInput = statePara.find('input');
          stateSpanRequired = statePara.find('[id$="state-required"]');
          if (states.length > 0) {
            selected = parseInt(stateSelect.val());
            stateSelect.html('');
            statesWithBlank = [
              {
                name: '',
                id: ''
              }
            ].concat(states);
            $.each(statesWithBlank, function(idx, state) {
              var opt;
              opt = ($(document.createElement('option'))).attr('value', state.id).html(state.name);
              if (selected === state.id) {
                opt.prop('selected', true);
              }
              return stateSelect.append(opt);
            });
            stateSelect.prop('disabled', false).show();
            stateInput.hide().prop('disabled', true);
            statePara.show();
            stateSpanRequired.show();
            if (statesRequired) {
              stateSelect.addClass('required');
            }
            stateSelect.removeClass('hidden');
            return stateInput.removeClass('required');
          } else {
            stateSelect.hide().prop('disabled', true);
            stateInput.show();
            if (statesRequired) {
              stateSpanRequired.show();
              stateInput.addClass('required');
            } else {
              stateInput.val('');
              stateSpanRequired.hide();
              stateInput.removeClass('required');
            }
            statePara.toggle(!!statesRequired);
            stateInput.prop('disabled', !statesRequired);
            stateInput.removeClass('hidden');
            return stateSelect.removeClass('required');
          }
        };
        ($('#bcountry select')).change(function() {
          return Spree.updateState('b');
        });
        ($('#scountry select')).change(function() {
          return Spree.updateState('s');
        });
        Spree.updateState('b');
        order_use_billing = $('input#order_use_billing');
        order_use_billing.change(function() {
          return update_shipping_form_state(order_use_billing);
        });
        update_shipping_form_state = function(order_use_billing) {
          if (order_use_billing.is(':checked')) {
            ($('#shipping .inner')).hide();
            return ($('#shipping .inner input, #shipping .inner select')).prop('disabled', true);
          } else {
            ($('#shipping .inner')).show();
            ($('#shipping .inner input, #shipping .inner select')).prop('disabled', false);
            return Spree.updateState('s');
          }
        };
        return update_shipping_form_state(order_use_billing);
      }
    };
    return Spree.onAddress();
  });

}).call(this);
