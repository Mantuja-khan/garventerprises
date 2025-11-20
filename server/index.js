// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// === CORS configuration ===
// Add or remove origins as needed
const corsOptions = {
  origin: [
    'http://localhost:5173',           // dev
    'http://localhost:3000',           // alternate local port (optional)
    'https://garventerprises.in',      // production
    'https://www.garventerprises.in',
    'https://garventerprises.onrender.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true // set to true only if you need cookies/credentials
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // handle preflight requests

// Body parser
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// === Nodemailer transporter ===
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD // 16-char app password for Gmail
  }
});

// verify transporter on startup (helpful for debugging)
transporter.verify((err, success) => {
  if (err) {
    console.error('Nodemailer transporter verification failed:', err);
  } else {
    console.log('Nodemailer transporter verified and ready to send mails');
  }
});

// Helper to format timestamp in Asia/Kolkata
function formatTimestamp(ts) {
  const d = new Date(ts || Date.now());
  try {
    return d.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  } catch (e) {
    return d.toString();
  }
}

// -------------------- /api/send-contact --------------------
app.post('/api/send-contact', async (req, res) => {
  try {
    const { name, email, phone, company, message, timestamp } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required fields' });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <style>
          @media only screen and (max-width: 480px) {
            h1 { font-size: 20px !important; }
            h2 { font-size: 16px !important; }
            p, td { font-size: 14px !important; }
          }
        </style>
        <div style="background-color: #FB923C; color: white; padding: 20px; text-align: center;">
          <h1>New Contact Form Submission - Garv Enterprises</h1>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #1F2937;">Customer Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone ? `<a href="tel:${phone}" style="color: #2563EB;">${phone}</a>` : 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${company || 'Not provided'}</td></tr>
          </table>
        </div>
        <div style="padding: 20px; background-color: white;">
          <h2 style="color: #1F2937;">Message</h2>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FB923C; white-space: pre-wrap;">${message}</div>
        </div>
        <div style="padding: 20px; background-color: #1F2937; color: white; text-align: center;">
          <p>Message received on: ${formatTimestamp(timestamp)}</p>
          <p style="margin: 0;">Garv Enterprises - Industrial Tools & Equipment</p>
          <p style="margin: 0;"><a href="mailto:garventerprise@yahoo.com" style="color: white;">garventerprise@yahoo.com</a> | <a href="tel:+917737525127" style="color: white;">+91 773-7525-127</a></p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name} - Garv Enterprises`,
      html: htmlContent,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);

    // Confirmation to user
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting Garv Enterprises',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #FB923C; color: white; padding: 20px; text-align: center;">
            <h1>Thank You for Getting in Touch!</h1>
          </div>
          <div style="padding: 20px;">
            <p>Dear ${name},</p>
            <p>Thank you for contacting Garv Enterprises. We have received your message and appreciate you taking the time to reach out to us.</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FB923C; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1F2937;">What happens next?</h3>
              <ul style="margin-bottom: 0;">
                <li>Our team will review your inquiry carefully</li>
                <li>We'll respond to you within 2 hours during business hours</li>
              </ul>
            </div>
            <p>Best regards,<br><strong>Garv Enterprises Team</strong></p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully! We will get back to you soon.' });
  } catch (error) {
    console.error('Error sending contact form email:', error);
    res.status(500).json({ success: false, error: 'Failed to send message. Please try again later.' });
  }
});

// -------------------- /api/send-quote --------------------
app.post('/api/send-quote', async (req, res) => {
  try {
    const {
      name, email, phone, company, quantity, specifications,
      message, productName, productCategory, timestamp
    } = req.body;

    // basic validation if you'd like
    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Name and email are required' });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <style>
          @media only screen and (max-width: 480px) {
            h1 { font-size: 20px !important; }
            h2 { font-size: 16px !important; }
            p, td { font-size: 14px !important; }
          }
        </style>
        <div style="background-color: #2563EB; color: white; padding: 20px; text-align: center;">
          <h1>New Quote Request - Garv Enterprises (Industrial Tools)</h1>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #1F2937;">Customer Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${company || 'Not provided'}</td></tr>
          </table>
        </div>
        <div style="padding: 20px; background-color: white;">
          <h2 style="color: #1F2937;">Industrial Tool Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Tool Name:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${productName || 'General Tool Inquiry'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Category:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${productCategory || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Quantity Required:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${quantity || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Specifications:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${specifications || 'Not specified'}</td></tr>
          </table>
        </div>
        ${message ? `<div style="padding: 20px; background-color: #f9f9f9;"><h2 style="color: #1F2937;">Additional Requirements</h2><p style="background-color: white; padding: 15px; border-left: 4px solid #2563EB;">${message}</p></div>` : ''}
        <div style="padding: 20px; background-color: #1F2937; color: white; text-align: center;">
          <p>Quote request received on: ${formatTimestamp(timestamp)}</p>
          <p style="margin: 0;">Garv Enterprises - Industrial Tools & Equipment</p>
          <p style="margin: 0;">Email: garventerprise@yahoo.com | Phone: 7737525127</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Quote Request - ${productName || 'General'} from ${name} - Garv Enterprises`,
      html: htmlContent,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);

    // Confirmation email to requester
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Quote Request Received - Garv Enterprises',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2563EB; color: white; padding: 20px; text-align: center;"><h1>Thank You for Your Quote Request</h1></div>
          <div style="padding: 20px;">
            <p>Dear ${name},</p>
            <p>Thank you for your interest in our industrial solutions. We have received your quote request for <strong>${productName || 'our products'}</strong> and our team will review it shortly.</p>
            <p>Best regards,<br><strong>Garv Enterprises Team</strong></p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({ success: true, message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send quote request' });
  }
});

// Health check
app.get('/api/health', (req, res) => res.status(200).json({ status: 'OK', message: 'Server is running' }));

// Fallback error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
