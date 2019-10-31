$(document).ready(function() {

// Validation Regexp
$.validator.addMethod("email", function(value, element) {
  return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
}, "Please enter a valid email address");

    $.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please");

$.validator.addMethod("numbers", function(value, element) {
  return this.optional(element) || /[0-9]/g.test(value);
}, "numbers only please");

 $.validator.addMethod("strongpass", function(value) {
   return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
       && /[a-z]/.test(value) // has a lowercase letter
       && /[0-9]/.test(value) // has a digit
       && /[A-Z]/.test(value) //upperCaseLetter
});

//Password Message validation
    $('input[type=password]').keyup(function() {
    var pswd = $(this).val();
     //console.log(pswd,pswd.length)

    //validate the length
    if ( pswd.length < 8 ) {
    $('.length').removeClass('valid').addClass('invalid');
    } else {
        //alert("password len > 8")
    $('.length').removeClass('invalid').addClass('valid');
    }

    //validate letter
    if ( pswd.match(/[A-z]/) ) {
    $('.letter').removeClass('invalid').addClass('valid');
    } else {
    $('.letter').removeClass('valid').addClass('invalid');
    }

    //validate capital letter
    if ( pswd.match(/[A-Z]/) ) {
    $('.capital').removeClass('invalid').addClass('valid');
    } else {
    $('.capital').removeClass('valid').addClass('invalid');
    }

    //validate number
    if ( pswd.match(/\d/) ) {
    $('.number').removeClass('invalid').addClass('valid');
    } else {
    $('.number').removeClass('valid').addClass('invalid');
    }
    })

    .focus(function(){$('.message').show();})
    .blur(function() {$('.message').hide();});

    //signup Rules and error msg

$('form[id="frm"]').validate({
    rules: {
      fname: {
        required: true,
        lettersonly: true,

      },
      lname:{
          required: true,
          lettersonly: true,
      },
      user_email: {
        required: true,
        email: true,
      },
      psword: {
        required: true,
        minlength: 8,
        strongpass: true,
      }
    },
    messages: {
      fname:{
          lettersonly:"Please input alphabet characters only",
           required:"This field is required"
      },

      lname:{
          lettersonly:"Please input alphabet characters only",
           required:"This field is required"
      },

      user_email:{
          email: "Please enter a valid email address",
          required:"This field is required"
      },

      psword: {
            strongpass:"This is not a strong password",
            minlength: "Password must be at least 8 characters long",
            required:'This field is required',
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });


    //login Rules and error msg

$('form[id="loginfrm"]').validate({
    rules: {
        login_email: {
        required: true,
        email: true,
      },

      login_pass: {
        required: true,
        minlength: 8,
        strongpass: true,
      }
    },
    messages: {
          login_email:{
          email: "Please enter a valid email address",
          required:"This field is required"
      },
        login_pass: {
        strongpass:"This is not a strong password",
        minlength: "Password must be at least 8 characters long",
        required:'This field is required',
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });


    //Contact form

    $('form[id="frm_contact"]').validate({

    rules: {
      fname: {
        required: true,
        lettersonly: true,
      },

      user_email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        maxlength: 10,
        numbers: true,
      },
        from_cmd: {
          required: true
        }
    },
    messages: {
    
      fname:{
          lettersonly:"Please input alphabet characters only",
           required:"This field is required"
      },

      user_email:{
          email: "Please enter a valid email address",
          required:"This field is required"
      },

      phone: {
        numbers:"Please input numeric characters only",
        maxlength: "Not a valid phone number",
        //maxlength: "Password must be at least 10 characters long",
        required:'This field is required',
      }
    },
    submitHandler: function(form) {
      form.submit();

    }
  });

});
