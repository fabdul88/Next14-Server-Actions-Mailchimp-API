import React from 'react';

export default function NewsletterHead() {
  return (
    <div className="mb-8 flex flex-col items-center w-full">
      <section className="flex flex-col items-center mb-8">
        <h1 className="text-[min(36.5vw,6.4375rem)] font-bold bg-clip-text text-transparent bg-gradient-text [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] text-center flex flex-col leading-none">
          Stay{' '}
          <span className="text-[min(16.5vw,3.125rem)] leading-none tracking-tight">
            Informed
          </span>
        </h1>
      </section>
      <section className="w-full max-w-[25.1875rem]">
        <p className="bg-clip-text text-transparent bg-gradient-text [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] text-lg text-center leading-tight tracking-tight font-semibold w-full">
          Signup to our email newsletter and be the first to know about the
          latest trends in the programming industry.{' '}
        </p>
      </section>
    </div>
  );
}
