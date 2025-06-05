export default function Contact() {
  return (
    <section class='contact'>
      <div class='container container-sm'>
        <h2 class='section-heading'>Contact Us</h2>
        <p>
          having a question? Leave your information below and we will get back
          to you as soon as possible.
        </p>

        <form name='contact' netlify>
          <div class='form-group'>
            <label class='v-hidden' for='first-name'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              id='first-name'
              placeholder='First Name'
            />
          </div>
          <div class='form-group'>
            <label class='v-hidden' for='last-name'>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              id='last-name'
              placeholder='Last Name'
            />
          </div>
          <div class='form-group'>
            <label class='v-hidden' for='email'>
              Email Address
            </label>
            <input
              type='email'
              name='emailAddress'
              id='email'
              placeholder='Email Address'
            />
          </div>
          <div class='form-group'>
            <label class='v-hidden' for='message'>
              Your Message
            </label>
            <textarea
              name='userMessage'
              id='message'
              placeholder='Message'
            ></textarea>
          </div>
          <div class='form-group'>
            <button class='btn btn-stretched btn-primary' type='submit'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
