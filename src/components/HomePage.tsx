// Address: project/src/components/HomePage.tsx
import { useState } from 'react';
import SignUpForm from './SignUpForm';
import CongratsModal from './CongratsModal';

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (details: any) => {
    setUserDetails(details);
    setShowModal(true);
  };

  return (
    <div>
      <SignUpForm onSubmit={handleSubmit} />
      {showModal && <CongratsModal userDetails={userDetails} />}
    </div>
  );
}

export default HomePage;