// Accessing the payload data from environment variables
const clientPayload = process.env.CLIENT_PAYLOAD;

if (clientPayload) {
  try {
    const payloadObject = JSON.parse(clientPayload);
    console.log('Client Payload:', JSON.stringify(payloadObject, null, 2));
  } catch (error) {
    console.error('Failed to parse client payload:', error);
  }
} else {
  console.error('No client payload found');
}

// Your logic here
