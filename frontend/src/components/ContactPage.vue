<template>
  <div class="contact">
    <div class="content">
      <h1>Contact Me</h1>
      <p><strong>Rakshitha N</strong></p>
      <p>Mobile: <a href="tel:+918867057553" class="contact-link">(+91) 8867057553</a></p>
      <p>Email: <a href="mailto:rakshitha.1si22cs143@gmail.com" class="contact-link">rakshitha.1si22cs143@gmail.com</a></p>
      
      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch('http://localhost:3000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        });
        if (response.ok) {
          alert('Message sent successfully!');
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
        } else {
          alert('Failed to send message.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  }
}
</script>

<style scoped>
/* Container styling */
.contact {
  background: linear-gradient(135deg, #fbc2eb, #a6c0fe);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* Content styling */
.content {
  max-width: 600px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Heading styling */
h1 {
  font-size: 2.5rem;
  color: #1e90ff;
  margin-bottom: 20px;
}

/* Paragraph styling */
p {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #333;
}

/* Link styling */
.contact-link {
  color: #1e90ff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #4682b4;
  text-decoration: underline;
}

/* Form styling */
.contact-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  height: 100px;
  resize: vertical;
}

button {
  background-color: #1e90ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #4682b4;
}
</style>
