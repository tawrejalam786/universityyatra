/**
 * Google Sheets Integration for University Yatra Forms
 * 
 * Setup Instructions:
 * 1. Create a Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Copy the code from the deployment guide below
 * 4. Deploy as Web App
 * 5. Copy the deployment URL and paste it in your environment variables
 */

/**
 * Submit form data to Google Forms
 * @param {Object} formData - Form data to submit
 * @param {string} formType - Type of form (contact, career-counselling, homepage)
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function submitToGoogleSheets(formData, formType = 'contact') {
  try {
    // Get the Google Form URL from environment variable
    const FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;
    
    if (!FORM_URL) {
      console.error('Google Form URL not configured');
      return {
        success: false,
        message: 'Form submission service not configured. Please contact support.'
      };
    }

    // Get field mappings from environment
    const FIELD_MAPPINGS = {
      name: process.env.NEXT_PUBLIC_FORM_FIELD_NAME || 'entry.1',
      email: process.env.NEXT_PUBLIC_FORM_FIELD_EMAIL || 'entry.2',
      phone: process.env.NEXT_PUBLIC_FORM_FIELD_PHONE || 'entry.3',
      subject: process.env.NEXT_PUBLIC_FORM_FIELD_SUBJECT || 'entry.4',
      message: process.env.NEXT_PUBLIC_FORM_FIELD_MESSAGE || 'entry.5',
      destination: process.env.NEXT_PUBLIC_FORM_FIELD_DESTINATION || 'entry.6',
    };

    console.log('Submitting to Google Form:', { formType, data: formData });
    console.log('URL:', FORM_URL);

    // Create form data
    const formBody = new URLSearchParams();
    
    // Map fields based on form type
    if (formData.name) formBody.append(FIELD_MAPPINGS.name, formData.name);
    if (formData.fullName) formBody.append(FIELD_MAPPINGS.name, formData.fullName);
    if (formData.email) formBody.append(FIELD_MAPPINGS.email, formData.email);
    if (formData.phone) formBody.append(FIELD_MAPPINGS.phone, formData.phone);
    if (formData.subject) formBody.append(FIELD_MAPPINGS.subject, formData.subject);
    if (formData.message) formBody.append(FIELD_MAPPINGS.message, formData.message);
    if (formData.destination) formBody.append(FIELD_MAPPINGS.destination, formData.destination);
    if (formData.preferredDestination) formBody.append(FIELD_MAPPINGS.destination, formData.preferredDestination);

    // Add form type and source as hidden fields if configured
    if (process.env.NEXT_PUBLIC_FORM_FIELD_TYPE) {
      formBody.append(process.env.NEXT_PUBLIC_FORM_FIELD_TYPE, formType);
    }
    if (process.env.NEXT_PUBLIC_FORM_FIELD_SOURCE) {
      formBody.append(process.env.NEXT_PUBLIC_FORM_FIELD_SOURCE, 'universityyatra.com');
    }

    // Submit to Google Form
    const response = await fetch(FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString()
    });

    console.log('Form submitted successfully');
    console.log('Response type:', response.type);

    // With no-cors, response is always opaque
    // Google Forms accepts the submission if no error is thrown
    return {
      success: true,
      message: 'Form submitted successfully! We will contact you soon.'
    };

  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Failed to submit form. Please try again or contact us directly.'
    };
  }
}

/**
 * Validate form data before submission
 * @param {Object} data - Form data to validate
 * @returns {{isValid: boolean, errors: Object}}
 */
export function validateFormData(data) {
  const errors = {};

  // Name validation
  if (data.name && data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  if (data.fullName && data.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters';
  }

  // Email validation
  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
  }

  // Phone validation (Indian 10-digit)
  if (data.phone) {
    const phoneDigits = data.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      errors.phone = 'Phone number must be exactly 10 digits';
    }
    if (!/^[6-9]/.test(phoneDigits)) {
      errors.phone = 'Phone number must start with 6, 7, 8, or 9';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
