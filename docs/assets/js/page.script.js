

    alert("fine");

    $('#Oxford').click(function (e) { 
        var text = $('input').val();
        window.open('https://www.oxfordlearnersdictionaries.com/definition/american_english/' + text);
        
    });

    $('#Google').click(function (e) { 
        var text = $('input').val();
        window.open('https://translate.google.com/?sl=en&tl=uk&text='+ text +'&op=translate');
        
    });

    $('#Reverso').click(function (e) { 
        var text = $('input').val();
        window.open('https://context.reverso.net/translation/english-russian/'+ text);
        
    });