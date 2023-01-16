//-- patron modulo
(()=>{ 

    //asignaciones
    const form       = document.getElementById('form'),
          message    = document.querySelector('.entrada'),
          btnEncrypt = document.querySelector('.first'),
          btnDecrypt = document.querySelector('.second'),
          finalMessage = document.querySelector('.crypted-void'),
          btnCopy    = document.querySelector('.third');
    
    
    
    const decode ={
        "a" : "ai",
        "e" : "enter",
        "i" : "imes",
        "o" : "ober",
        "u" : "ufat"
    };
    
    
    //sirve para que del array de palabras se sustituyan los caracteres
    const comparaLetra = (letters) =>{
      letters=letters.replace(/ai/g,"a");
      letters=letters.replace(/enter/g,"e");
      letters=letters.replace(/imes/g,"i");
      letters=letters.replace(/ober/g,"o");
      letters=letters.replace(/ufat/g,"u");
      return letters
    }
    
    //compara si las letras de la palabra son descifrables, si es asi las sustituye si no, deja la letra original
    const compareArrays = ( letters ) => {
        return letters.map( letter => {
          return decode.hasOwnProperty( letter ) ? 
          decode[ letter ] 
          : letter;
        });
      };
    
    
    //une caracteres de la palabra
    const joinArrays = ( arrays ) => {
      return arrays.join( "" );
    };
    
    
    //hace la labor de encriptar / desencriptar 
    const getString =( choice )=> {
      text =  message.value
      return !text ? 
        alert("No message found"): 
        text.split(" ").map(word =>{
          if( choice==='normal' ) {
              const letters = word.split( "" );
              newWord = compareArrays( letters );  
              return joinArrays( newWord );
            } else if(choice === 'reverse'){
              newWord = comparaLetra( word );
              
              return newWord
            } else{
              console.log('invalid');
            }
    
          });
    };
        
    
    //renderiza el mensaje en el espacio del texto resultado
    const renderText=(result)=>{
      let textLength = result.length <= 625?
            "small-length": 
                result.length <= 800 ? "medium2-length" :   
                result.length <=1100? "medium2-length":   "large-length";
    
        finalMessage.innerHTML = `<div  class="crypted-text fade-in-fwd ${textLength}">${result} </div>`
    }
    
    //valida la entrada de texto para que no tenga: 
    //    mayusculas, simbolos, numeros, acentos
    const checkRegex=(str)=> {
      originalString = str.trim()
      const regex = /(\W+$|[0-9]|[A-Záéíóú])/;
     //  const regex = /^[a-z\s]*$/;
      if (regex.test(originalString)) {
        return false
      } 
     }
     
     
    //funcion encargada de copiar texto a clipboard
    const copyText =( )=>{
      let text = document.querySelector(".crypted-text").innerText
      navigator.clipboard.writeText(text)
    }
    
    
    //----- Eventos de boton----->
    
    //boton encriptar
    btnEncrypt.addEventListener('click',e =>{
        e.preventDefault();
        try {
          validateMessage = checkRegex(message.value)
          if (validateMessage==false) {
            result = `Por favor: Introduzca sólo minúsculas, evite números y símbolos`
            renderText(result) 
    
          }else{
    
            const result = getString('normal').join(" "); 
            
            renderText(result)  
          }  
        } catch (error) {
    
          console.log('empty text');
        }
        
    });
    
    
    //--boton desencriptar
    btnDecrypt.addEventListener('click',e =>{
        e.preventDefault();
        try {
          validateMessage = checkRegex(message.value)
          if (validateMessage==false) {
            result = `Por favor: Introduzca sólo minúsculas, evite números y símbolos`
            renderText(result) 
    
          }else{
    
            const result = getString('reverse').join(" "); 
            
            renderText(result)  
          }  
        } catch (error) {
    
          console.log('empty text');
        }
        
    });
    
    
    //--boton copiar--
    btnCopy.addEventListener('click', e =>{
      e.preventDefault();
      try {
        copyText();  
      } catch (error) {
        console.log("Empty Text");
      }
      
    });
    
      
    
    
    })();
    
//-- patron modulo
(()=>{ 

    //asignaciones
    const form       = document.getElementById('form'),
          message    = document.querySelector('.entrada'),
          btnEncrypt = document.querySelector('.first'),
          btnDecrypt = document.querySelector('.second'),
          finalMessage = document.querySelector('.crypted-void'),
          btnCopy    = document.querySelector('.third');
    
    
    
    const decode ={
        "a" : "ai",
        "e" : "enter",
        "i" : "imes",
        "o" : "ober",
        "u" : "ufat"
    };
    
    
    //sirve para que del array de palabras se sustituyan los caracteres
    const comparaLetra = (letters) =>{
      letters=letters.replace(/ai/g,"a");
      letters=letters.replace(/enter/g,"e");
      letters=letters.replace(/imes/g,"i");
      letters=letters.replace(/ober/g,"o");
      letters=letters.replace(/ufat/g,"u");
      return letters
    }
    
    //compara si las letras de la palabra son descifrables, si es asi las sustituye si no, deja la letra original
    const compareArrays = ( letters ) => {
        return letters.map( letter => {
          return decode.hasOwnProperty( letter ) ? 
          decode[ letter ] 
          : letter;
        });
      };
    
    
    //une caracteres de la palabra
    const joinArrays = ( arrays ) => {
      return arrays.join( "" );
    };
    
    
    //hace la labor de encriptar / desencriptar 
    const getString =( choice )=> {
      text =  message.value
      return !text ? 
        alert("No message found"): 
        text.split(" ").map(word =>{
          if( choice==='normal' ) {
              const letters = word.split( "" );
              newWord = compareArrays( letters );  
              return joinArrays( newWord );
            } else if(choice === 'reverse'){
              newWord = comparaLetra( word );
              
              return newWord
            } else{
              console.log('invalid');
            }
    
          });
    };
        
    
    //renderiza el mensaje en el espacio del texto resultado
    const renderText=(result)=>{
      let textLength = result.length <= 625?
            "small-length": 
                result.length <= 800 ? "medium2-length" :   
                result.length <=1100? "medium2-length":   "large-length";
    
        finalMessage.innerHTML = `<div  class="crypted-text fade-in-fwd ${textLength}">${result} </div>`
    }
    
    //valida la entrada de texto para que no tenga: 
    //    mayusculas, simbolos, numeros, acentos
    const checkRegex=(str)=> {
      originalString = str.trim()
      const regex = /(\W+$|[0-9]|[A-Záéíóú])/;
     //  const regex = /^[a-z\s]*$/;
      if (regex.test(originalString)) {
        return false
      } 
     }
     
     
    //funcion encargada de copiar texto a clipboard
    const copyText =( )=>{
      let text = document.querySelector(".crypted-text").innerText
      navigator.clipboard.writeText(text)
    }
    
    
    //----- Eventos de boton----->
    
    //boton encriptar
    btnEncrypt.addEventListener('click',e =>{
        e.preventDefault();
        try {
          validateMessage = checkRegex(message.value)
          if (validateMessage==false) {
            result = `Por favor: Introduzca sólo minúsculas, evite números y símbolos`
            renderText(result) 
    
          }else{
    
            const result = getString('normal').join(" "); 
            
            renderText(result)  
          }  
        } catch (error) {
    
          console.log('empty text');
        }
        
    });
    
    
    //--boton desencriptar
    btnDecrypt.addEventListener('click',e =>{
        e.preventDefault();
        try {
          validateMessage = checkRegex(message.value)
          if (validateMessage==false) {
            result = `Por favor: Introduzca sólo minúsculas, evite números y símbolos`
            renderText(result) 
    
          }else{
    
            const result = getString('reverse').join(" "); 
            
            renderText(result)  
          }  
        } catch (error) {
    
          console.log('empty text');
        }
        
    });
    
    
    //--boton copiar--
    btnCopy.addEventListener('click', e =>{
      e.preventDefault();
      try {
        copyText();  
      } catch (error) {
        console.log("Empty Text");
      }
      
    });
    
      
    
    
    })();
    
        