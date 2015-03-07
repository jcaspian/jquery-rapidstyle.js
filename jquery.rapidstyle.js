(function( $ ) {
  
  var common = [
    'background',
    'background-attachment',
    'background-clip',
    'background-color',
    'background-image',
    'background-origin',
    'background-position',
    'background-repeat',
    'background-size',
    'border',
    'border-bottom',
    'border-bottom-color',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'border-bottom-style',
    'border-bottom-width',
    'border-color',
    'border-image',
    'border-image-outset',
    'border-image-repeat',
    'border-image-slice',
    'border-image-source',
    'border-image-width',
    'border-left',
    'border-left-color',
    'border-left-style',
    'border-left-width',
    'border-radius',
    'border-right',
    'border-right-color',
    'border-right-style',
    'border-right-width',
    'border-style',
    'border-top',
    'border-top-color',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-top-style',
    'border-top-width',
    'box-shadow',
    'bottom',
    'clear',
    'clip',
    'display',
    'float',
    'height',
    'left',
    'overflow',
    'overflow-x',
    'overflow-y',
    'padding',
    'padding-bottom',
    'padding-left',
    'padding-right',
    'padding-top',
    'position',
    'right',
    'top',
    'visibility',
    'width',
    'vertical-align',
    'z-index',
    'align-content',
    'align-items',
    'align-self',
    'display',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'justify-content',
    'margin',
    'margin-bottom',
    'margin-left',
    'margin-right',
    'margin-top',
    'max-height',
    'max-width',
    'min-height',
    'min-width',
    'order',
    'hanging-punctuation',
    'hyphens',
    'letter-spacing',
    'line-break',
    'overflow-wrap',
    'tab-size',
    'text-align',
    'text-align-last',
    'text-combine-upright',
    'text-indent',
    'text-justify',
    'text-transform',
    'white-space',
    'word-break',
    'word-spacing',
    'word-wrap',
    'text-decoration',
    'text-decoration-color',
    'text-decoration-line',
    'text-decoration-style',
    'text-shadow',
    'text-underline-position',
    'font',
    'font-family',
    'font-feature-settings',
    'font-kerning',
    'font-language-override',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-synthesis',
    'font-variant',
    'font-variant-alternates',
    'font-variant-caps',
    'font-variant-east-asian',
    'font-variant-ligatures',
    'font-variant-numeric',
    'font-variant-position',
    'font-weight',
    'direction',
    'text-orientation',
    'text-combine-upright',
    'unicode-bidi',
    'writing-mode',
    'border-collapse',
    'border-spacing',
    'caption-side',
    'empty-cells',
    'table-layout',
    'counter-increment',
    'counter-reset',
    'list-style',
    'list-style-image',
    'list-style-position',
    'list-style-type',
    'animation',
    'animation-delay',
    'animation-direction',
    'animation-duration',
    'animation-fill-mode',
    'animation-iteration-count',
    'animation-name',
    'animation-timing-function',
    'animation-play-state',
    'backface-visibility',
    'perspective',
    'perspective-origin',
    'transform',
    'transform-origin',
    'transform-style',
    'transition',
    'transition-property',
    'transition-duration',
    'transition-timing-function',
    'transition-delay',
    'box-sizing',
    'content',
    'cursor',
    'icon',
    'ime-mode',
    'nav-down',
    'nav-index',
    'nav-left',
    'nav-right',
    'nav-up',
    'outline',
    'outline-color',
    'outline-offset',
    'outline-style',
    'outline-width',
    'resize',
    'text-overflow',
  ];
  
  $.fn.rapidstyle = $.fn.rapidStyle = function(selector) {
    
    !window.console && (window.console={log:function(){}});
    
    var timeStarted = new Date();
    console.log('Start:', timeStarted);
    
    common.reverse();
    selector = (selector === false)? '*' : selector;
    
    var elements      = $(this).find(selector || '._rs'),
        generatedCss  = [],
        generatedName = [];
    
    console.log('Selected element: ' + elements.length);
    
    for (var e = 0, elen = elements.length; e < elen; e++) {
      var classNames = $(elements[e]).attr('class');
      
      if (classNames === undefined) { continue; }
      
      classNames = classNames.split(' ');
      
      for (var c = 0, clen = common.length; c < clen; c++) {
        
        var classMatch = null;
        var matchClassName = null;
        
        for (var n = 0, nlen = classNames.length; n < nlen; n++) {
          
          if (classNames[n].indexOf(common[c]) != -1) {
            classMatch = common[c];
            matchClassName = classNames[n];
          }
          
        }
        
        if (classMatch !== null && matchClassName !== null && generatedName.indexOf(matchClassName) == -1) {
          generatedName.push(matchClassName);
          var generatedStyle = matchClassName.replace(classMatch + '-', '');
          var generatedClassName = matchClassName.replace('-' + generatedStyle, '');
          generatedCss.push({class: matchClassName, style: generatedClassName + ':' + generatedStyle});
        }
        
      }
      
    }
    
    console.log('Generated style object: ', generatedCss);
    
    var styleContent = '';
    for (var i = 0, ilen = generatedCss.length; i < ilen; i++) {
      styleContent += [('.' + generatedCss[i].class), '{', generatedCss[i].style, '}'].join(' ') + '\n';
    }
    
    console.log('Generated style: \n' + styleContent);
    
    $('body')
      .append( '<!-- Generated by rapidStyle.js -->' )
      .append( $('<style>').append(styleContent)     )
    ;
    
    var timeFinished = new Date();
    console.log('Finish:', timeFinished);
    console.log('Time taken:', timeFinished.getTime() - timeStarted.getTime(), 'ms');
    
  };
  
}( jQuery ));
