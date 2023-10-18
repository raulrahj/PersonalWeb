


$(document).ready(function() {

    jQuery.validator.addMethod("noSpace", function(value, element) { 
       return value.indexOf(" ") < 0 && value != ""; 
    }, "Space are not allowed for second name add -");



    jQuery.validator.addMethod("minimumlength", function(value, element, param) {
        return this.optional(element) || value.length > param;
       }, $.validator.format("length is too low"));


       jQuery.validator.addMethod("maximumlength", function(value, element, param) {
        return this.optional(element) || value.length < param;
       }, $.validator.format("length is too high"));



       jQuery.validator.addMethod("exactlength", function(value, element, param) {
        return this.optional(element) || value.length == param;
       }, $.validator.format("enter a valid number"));





     jQuery.validator.addMethod("laxEmail", function(value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
      }, 'Please enter a valid email address.');


      $.validator.addMethod("alpha", function(value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z]+$/);
    }, 'only alphabets are allowed.');
     



  
    $("#submit-form").validate({
      errorLabelContainer: $("#form-messages"),
      rules: {
        name: { alpha:true, required: true, noSpace: true, minimumlength:4, maximumlength:20 },
        message: { required: true, },
        mail:{ required:true, laxEmail:true },
        number:{ required:true, noSpace:true, digits:true , exactlength:10 ,  }
      },
      messages: {
        name: { required: 'Please enter your name' },
        message : { required: "Please enter the message" },
        number:{ required:'please enter mobile number'},
        message:{ required:'please leaave a message'}
    
        
      }
    });
  
    $('#submit').click(function() {
      var valid = $("#submit-form").valid();
      if(!valid) {
        return false;
      }
      $.ajax({
        beforeSend: function() {
          // display loading message
        },
        type: "POST",
        url: '',
        data:  $('#submit-form').serialize(),
        dataType: 'json',
        cache: false,
        success: function(result) {
          if(result.error) {
            // show error message
          }
          else {
            // redirect to another page
          }
        },
        error: function (response, desc, exception) {
          // show ajax error
        },
        complete: function() {
          // hide loading message
        }
      });
    });
  })


  
// Document is ready
$(document).ready(function () {
    
  // Validate Username
      $('#usercheck').hide();   
      let usernameError = true;
      $('#usernames').keyup(function () {
          validateUsername();
      });
       
      function validateUsername() {
        let usernameValue = $('#usernames').val();
        if (usernameValue.length == '') {
        $('#usercheck').show();
            usernameError = false;
            return false;
        }
        else if((usernameValue.length < 3)||
                (usernameValue.length > 10)) {
            $('#usercheck').show();
            $('#usercheck').html
  ("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        }
        else {
            $('#usercheck').hide();
        }
      }
   
     // Validate Email
      const email =
          document.getElementById('email');
      email.addEventListener('blur', ()=>{
         let regex =
  /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
         let s = email.value;
         if(regex.test(s)){
            email.classList.remove(
                  'is-invalid');
            emailError = true;
          }
          else{
              email.classList.add(
                    'is-invalid');
              emailError = false;
          }
      })
    });