import React from 'react';
import Persona from 'persona';

const MyPersonaReactComponent = () => {
  return (
    <Persona.Inquiry
    templateId=''
    environmentId=''
    onLoad={() => { console.log('Loaded inline'); }}
    onComplete={({ inquiryId, status, fields }) => {
       // Inquiry completed. Optionally tell your server about it.
      console.log(`Sending finished inquiry ${inquiryId} to backend`);
    }}
  />
  );
};

export default MyPersonaReactComponent;
