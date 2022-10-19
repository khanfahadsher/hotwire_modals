import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbo-modal"
export default class extends Controller {

  static targets = ['personal', 'form']

  connect () {
    this.element.addEventListener("turbo:submit-start", e => this.personal_validate(e))
    this.element.addEventListener("turbo:submit-start", e => this.employment_validate(e))
  }

  personal_validate (event) {
    var first_name = document.getElementById('first-name').value;
    var last_name = document.getElementById('last-name').value;
    var email_address = document.getElementById('email-address').value;
    var phone_number = document.getElementById('phone-number').value;
    if (first_name == ""){
      document.getElementById('first_name_error').textContent = "First name field is required";
      document.getElementById('first_name_error').style.color = 'red'
      event.detail.formSubmission.stop()
      return
    }
    else{
      document.getElementById('first_name_error').textContent = ""
    }
    if (last_name == ""){
      document.getElementById('last_name_error').textContent = "Last name field is required";
      document.getElementById('last_name_error').style.color = 'red'
      event.detail.formSubmission.stop()
      return
    }
    else{
      document.getElementById('last_name_error').textContent = ""
    }

    if (email_address != "") {
      var email_check = "true"
      var valid_email = email_address.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (valid_email == null)
      {
        email_check == 'false'
        document.getElementById('email_error').textContent = ""
        document.getElementById('email_error').textContent = "Email format is not correct";
        document.getElementById('email_error').style.color = 'red'
        event.detail.formSubmission.stop()
        return
      }
      else{
        document.getElementById('email_error').textContent = ""
      }

      if (email_check == 'true'){
        document.getElementById('email_error').textContent = ""
      }
    } 
    else if (email_address == ""){
      document.getElementById('email_error').textContent = "Email field is required";
      document.getElementById('email_error').style.color = 'red'
      event.detail.formSubmission.stop()
      return
    }
    else{
      document.getElementById('email_error').textContent = ""
    }
    if (phone_number == ""){
      document.getElementById('phone_error').textContent = "Phone field is required";
      document.getElementById('phone_error').style.color = 'red'
      event.detail.formSubmission.stop()
      return
    }
    else{
      document.getElementById('phone_error').textContent = ""
    }
  }

  employment_validate(event) {
    var employment = document.getElementById('employer').value;
    var date_started = document.getElementById('date-started').value;
    var date_ended = document.getElementById('date-employment-ended').value;
    if (employment == ""){
      document.getElementById('employment_error').textContent = "Employment name field is required";
      document.getElementById('employment_error').style.color = 'red'
      event.detail.formSubmission.stop()
      return
    }
    else{
      document.getElementById('employment_error').textContent = ""
    }
    if (date_started == ""){
      document.getElementById('date_started_error').textContent = "Date field is required";
      document.getElementById('date_started_error').style.color = 'red'
      event.detail.formSubmission.stop()
      return
    }
    else{
      document.getElementById('date_started_error').textContent = ""
    }

    if (date_ended == ""){
      document.getElementById('date_ended_error').textContent = "Date field is required";
      document.getElementById('date_ended_error').style.color = 'red'
      event.detail.formSubmission.stop()
      return
    }
    else{
      document.getElementById('date_ended_error').textContent = ""
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
  
}
