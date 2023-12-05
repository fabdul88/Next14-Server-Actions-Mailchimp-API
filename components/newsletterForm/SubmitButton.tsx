'use client';

import { useFormStatus } from 'react-dom';
import { IoIosPaperPlane } from 'react-icons/io';
import SVGElement from '../svgElement/SVGElement';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="py-2 px-4 mt-12 bg-transparent bg-clip-text text-transparent bg-gradient-text [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] border-[0.5px] border-[#d3d3d370] flex items-center gap-2"
    >
      Subscribe{' '}
      <span>
        <SVGElement
          gradientId="subscribeGradient"
          colorOne="#d3d3d3"
          colorTwo="#2d3436"
        />
        <IoIosPaperPlane
          className="h-6 w-6"
          style={{ fill: 'url(#subscribeGradient)' }}
          title="subscribe paper plane icon"
        />
      </span>
    </button>
  );
}
