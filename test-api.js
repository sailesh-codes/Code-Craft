// Simple test script for the contact API
const testContactAPI = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    projectType: "Website Development",
    message: "This is a test message"
  };

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    console.log('API Response:', result);
    console.log('Status:', response.status);
    
    if (response.ok) {
      console.log('✅ Contact API is working correctly!');
    } else {
      console.log('❌ Contact API failed');
    }
  } catch (error) {
    console.log('❌ Error testing API:', error.message);
  }
};

// Run the test
testContactAPI();
