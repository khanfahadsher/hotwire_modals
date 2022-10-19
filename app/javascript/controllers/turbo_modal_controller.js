import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbo-modal"
export default class extends Controller {

  static targets = ['personal', 'form']

  connect () {
    this.element.addEventListener("turbo:submit-start", e => this.validate(e))
  }

  validate (event) {
    $(".personal_contents").validate({
      rules: {
          first_name: "required",
          last_name: "required",
          email_address: "required",
          phone_number: "required"
      },
      messages: {
          first_name: "Please enter first name",
          last_name: "Please enter last name",
          email_address: "Please enter email address",
          phone_number: "Please enter phone number",
      }
    })
    var first_name = document.getElementById('first-name').value;
    var last_name = document.getElementById('last-name').value;
    var email_address = document.getElementById('email-address').value;
    var phone_number = document.getElementById('phone-number').value;
    if (email_address != null) {
      var valid_email = email.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (valid_email != null)
      {
        email_address = "true"
      }
      else {
        email_address = null
        document.getElementById('email_error').text("Email format is not correct");
        document.getElementById('email_error').css('color','red');
        event.detail.formSubmission.stop()
        return
      }
    } 
    else{
      document.getElementById('email_error').text("Email field is required");
      document.getElementById('email_error').css('color','red');
      event.detail.formSubmission.stop()
      return
    }
    if (first_name == null){

    }
    if (true) {
      event.detail.formSubmission.stop()
      return
    }
  }

  hideModal() {
    this.element.parentElement.removeAttribute("src") 
    this.element.remove()
  }

  submitEnd(e) {
    if (e.detail.success) {
      this.hideModal()
    }
  }
  
  personal_validations(e) {
    debugger
    

    
    if (e.detail.success) {
      this.hideModal()
    }
  }
}
