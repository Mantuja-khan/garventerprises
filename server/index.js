const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD // Your 16-character app password
  }
});

// Contact form endpoint
app.post('/api/send-contact', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      message,
      timestamp
    } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required fields' });
    }

    // Email content for owner
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      
        <style>
          @media only screen and (max-width: 480px) {
            h1 { font-size: 20px !important; }
            h2 { font-size: 16px !important; }
            p, td { font-size: 14px !important; }
          }
        </style>

        <!-- Header -->
        <div style="background-color: #FB923C; color: white; padding: 20px; text-align: center;">
          <h1>New Contact Form Submission - Garv Enterprises</h1>
        </div>
        
        <!-- Customer Information -->
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #1F2937;">Customer Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">
                <a href="mailto:${email}" style="color: #2563EB;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">
                ${phone ? `<a href="tel:${phone}" style="color: #2563EB;">${phone}</a>` : 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${company || 'Not provided'}</td>
            </tr>
          </table>
        </div>

        <!-- Message -->
        <div style="padding: 20px; background-color: white;">
          <h2 style="color: #1F2937;">Message</h2>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FB923C; white-space: pre-wrap;">${message}</div>
        </div>

        <!-- Footer -->
        <div style="padding: 20px; background-color: #1F2937; color: white; text-align: center;">
          <p>Message received on: ${new Date(timestamp || Date.now()).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          <p style="margin: 0;">Garv Enterprises - Industrial Tools & Equipment</p>
          <p style="margin: 0;">
            <a href="mailto:garventerprise@yahoo.com" style="color: white;">garventerprise@yahoo.com</a> | 
            <a href="tel:+917737525127" style="color: white;">+91 773-7525-127</a>
          </p>
        </div>

      </div>
    `;

    // Email options to owner
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to company email
      subject: `New Contact Form Submission from ${name} - Garv Enterprises`,
      html: htmlContent,
      replyTo: email
    };

    // Send email to owner
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer
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
                <li>One of our experts will address your specific requirements</li>
                <li>We're here to help with all your industrial needs</li>
              </ul>
            </div>
            
            <div style="background-color: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1F2937;">Your Message</h3>
              <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
            </div>
            
            <p>If you have any urgent questions, please don't hesitate to contact us at:</p>
            <p>
              <strong>Phone:</strong> <a href="tel:+917737525127" style="color: #FB923C;">+91 773-7525-127</a> | 
              <a href="tel:+919828388188" style="color: #FB923C;">+91 982-8388-188</a><br>
              <strong>Email:</strong> <a href="mailto:garventerprise@yahoo.com" style="color: #FB923C;">garventerprise@yahoo.com</a><br>
              <strong>WhatsApp:</strong> <a href="https://wa.me/917737525127" style="color: #25D366;">Chat with us</a>
            </p>
            
            <p><strong>Business Hours:</strong><br>
            Monday - Saturday: 9:00 AM - 7:00 PM<br>
            Sunday: Closed</p>
            
            <p>Best regards,<br>
            <strong>Garv Enterprises Team</strong><br>
            Industrial Tools & Equipment Solutions</p>
          </div>
          
          <div style="background-color: #1F2937; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0; font-size: 12px;">
              J1264F RIICO INDUSTRIAL AREA, PHASE 5 BHIWADI, RAJASTHAN 301019
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({ 
      success: true,
      message: 'Message sent successfully! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('Error sending contact form email:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

// Quote request endpoint (existing)
app.post('/api/send-quote', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      quantity,
      specifications,
      message,
      productName,
      productCategory,
      timestamp
    } = req.body;

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      
        <style>
          @media only screen and (max-width: 480px) {
            h1 { font-size: 20px !important; }
            h2 { font-size: 16px !important; }
            p, td { font-size: 14px !important; }
          }
        </style>

        <!-- Header -->
        <div style="background-color: #2563EB; color: white; padding: 20px; text-align: center;">
          <h1>New Quote Request - Garv Enterprises (Industrial Tools)</h1>
        </div>
        
        <!-- Customer Information -->
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #1F2937;">Customer Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${company || 'Not provided'}</td>
            </tr>
          </table>
        </div>

        <!-- Industrial Tool Information -->
        <div style="padding: 20px; background-color: white;">
          <h2 style="color: #1F2937;">Industrial Tool Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Tool Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${productName || 'General Tool Inquiry'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Category:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${productCategory || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Quantity Required:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${quantity}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Specifications:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${specifications || 'Not specified'}</td>
            </tr>
          </table>
        </div>

        <!-- Additional Requirements -->
        ${message ? `
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #1F2937;">Additional Requirements</h2>
          <p style="background-color: white; padding: 15px; border-left: 4px solid #2563EB;">${message}</p>
        </div>
        ` : ''}

        <!-- Footer -->
        <div style="padding: 20px; background-color: #1F2937; color: white; text-align: center;">
          <p>Quote request received on: ${new Date(timestamp).toLocaleString()}</p>
          <p style="margin: 0;">Garv Enterprises - Industrial Tools & Equipment</p>
          <p style="margin: 0;">Email: garventerprise@yahoo.com | Phone: 7737525127</p>
        </div>

      </div>
    `;

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to company email
      subject: `New Quote Request - ${productName || 'General'} from ${name} - Garv Enterprises`,
      html: htmlContent,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Quote Request Received - Garv Enterprises',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2563EB; color: white; padding: 20px; text-align: center;">
            <h1>Thank You for Your Quote Request</h1>
          </div>
          
          <div style="padding: 20px;">
            <p>Dear ${name},</p>
            
            <p>Thank you for your interest in our industrial solutions. We have received your quote request for <strong>${productName || 'our products'}</strong> and our team will review it shortly.</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FB923C; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1F2937;">What happens next?</h3>
              <ul style="margin-bottom: 0;">
                <li>Our sales team will review your requirements</li>
                <li>We'll prepare a detailed quote within 24 hours</li>
                <li>You'll receive a personalized proposal via email</li>
                <li>Our experts will be available for any questions</li>
              </ul>
            </div>
            
            <p>If you have any urgent questions, please don't hesitate to contact us at:</p>
            <p><strong>Phone:</strong> +91 773-7525-127<br>
            <strong>Email:</strong> garventerprise@yahoo.com</p>
            
            <p>Best regards,<br>
            <strong>Garv Enterprises Team</strong><br>
            Industrial Tools & Equipment Solutions</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({ message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send quote request' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});