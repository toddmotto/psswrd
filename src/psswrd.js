window.psswrd = ( function ( window, document, undefined ) {

  'use strict';

  /*
   * Constructor function
   */
  var Psswrd = function ( elem ) {
    this.elem = elem;
  };

  /*
   * Fetch the data-psswrd-toggle inputs
   */
  var dataInit = document.querySelectorAll( '[data-init-psswrd]' );
  var psswrdNodes = document.querySelectorAll( '[data-psswrd-toggle]' );

  /*
   * Prototypal setup
   */
  Psswrd.prototype = {

    init : function () {

      var docFrag = document.createDocumentFragment();
      var random = 'data-psswrd-id-' + [ Math.floor( Math.random() * 9999 ) ];

      var dataCheckbox = document.createElement( 'input' );
      dataCheckbox.id = random;
      dataCheckbox.className = 'data-psswrd-checkbox';
      dataCheckbox.type = 'checkbox';
      dataCheckbox.setAttribute( 'data-psswrd-checkbox', '' );

      var dataText = document.createElement( 'label' );
      dataText.setAttribute( 'for', random );
      dataText.className = 'data-psswrd-text';
      dataText.setAttribute( 'data-psswrd-text', '' );
      dataText.innerHTML = 'Show password';

      docFrag.appendChild( dataCheckbox );
      docFrag.appendChild( dataText );
      this.elem.parentNode.appendChild( docFrag );

    }

  };

  /*
   * Change event that fires
   * when an input is checked
   */
  var changeFunction = function () {

    var labelChildNodes = this.parentNode.childNodes;

    for ( var z = 0; z < labelChildNodes.length; z++ ) {
      var self = labelChildNodes[z];
      if ( ( self.nodeName.toLowerCase() === 'input' ) && ( self.hasAttribute( 'data-psswrd-toggle' ) ) ) {
        self.type = this.checked ? 'text' : 'password';
      } else if ( ( self.nodeName.toLowerCase() === 'label' ) && ( self.hasAttribute( 'data-psswrd-text' ) )) {
        self.innerHTML = this.checked ? 'Hide password' : 'Show password';
      }
    }

  };

  /*
   * Initiate the plugin
   */
  if ( dataInit.length > 0 ) {
    for ( var i = 0; i < psswrdNodes.length; i++ ) {
      new Psswrd( psswrdNodes[i] ).init();
    }
  }

  /*
   * Bind onchange events to the checkboxes
   */
  var dataCheckbox = document.querySelectorAll( '[data-psswrd-checkbox]' );
  for ( var j = 0; j < dataCheckbox.length; j++ ) {
    dataCheckbox[j].onchange = changeFunction;
  }

})( window, document );