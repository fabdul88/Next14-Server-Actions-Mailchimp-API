'use client';

import { useFormState } from 'react-dom';
import { handleSubscription } from './actions';
import { inputType } from './data';
import SubmitButton from './SubmitButton';
import { PiEnvelope } from 'react-icons/pi';
import { LuUser2 } from 'react-icons/lu';
import SVGElement from '../svgElement/SVGElement';
import NewsletterFormStatus from './NewsletterFormStatus';

const initialState = {
  status: '',
  message: '',
  data: null,
};

export default function NewsletterForm() {
  const [state, formAction] = useFormState(handleSubscription, initialState);

  return (
    <div className="w-full flex flex-col items-center">
      <form
        action={formAction}
        className="border-form-border border-[0.5px] bg-gradient-form p-4 mb-6 w-full max-w-[25.1875rem]"
      >
        <section>
          <div className="px-4 py-8">
            <p className=" text-sm">
              Fields marked with <span className="text-error">* </span>are
              mandatory
            </p>
          </div>
          {inputType &&
            inputType.map((input) => (
              <div key={input.id} className="p-2">
                <label className="text-sm  p-2" htmlFor={input.labelHtmlFor}>
                  {input.labelName}
                  <span className="text-error"> *</span>
                </label>
                <div className="flex items-center">
                  <span className="px-2">
                    <SVGElement
                      gradientId="gradientInputIcon"
                      colorOne="#d3d3d3"
                      colorTwo="#2d3436"
                    />
                    {input.inputName === 'first-name' && (
                      <LuUser2
                        style={{ stroke: 'url(#gradientInputIcon)' }}
                        title="first name input field icon"
                      />
                    )}
                    {input.inputName === 'last-name' && (
                      <LuUser2
                        style={{ stroke: 'url(#gradientInputIcon)' }}
                        title="last name input field icon"
                      />
                    )}
                    {input.inputName === 'email' && (
                      <PiEnvelope
                        style={{ fill: 'url(#gradientInputIcon)' }}
                        title="email address input field icon"
                      />
                    )}
                  </span>
                  <input
                    type={input.inputType}
                    name={input.inputName}
                    id={input.inputId}
                    placeholder={input.inputPlaceholder}
                    className="border-gray-300 border-b-[0.1px] bg-transparent w-full text-[#f8f9fa] text-sm p-2 active:bg-transparent"
                  ></input>
                </div>
              </div>
            ))}
        </section>
        <section className="flex justify-center">
          <SubmitButton />
        </section>
        <section className="flex justify-center text-center mt-6">
          <NewsletterFormStatus state={state} />
        </section>
      </form>
    </div>
  );
}
