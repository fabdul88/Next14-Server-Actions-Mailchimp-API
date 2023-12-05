import Link from 'next/link';
import { newsletterSocialIcons } from './data';
import SVGElement from '../svgElement/SVGElement';
import { SlSocialFacebook, SlSocialInstagram } from 'react-icons/sl';
import { RiTwitterXLine } from 'react-icons/ri';

export default function NewsLetterFooter() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mb-6 w-full max-w-[25.1875rem]">
        <h2 className="mb-2">Follow us</h2>
        <div className="flex gap-2 w-full justify-between">
          {newsletterSocialIcons &&
            newsletterSocialIcons.map((icon) => (
              <Link key={icon.id} href={icon.href}>
                <SVGElement
                  gradientId="socialIconGradient"
                  colorOne="#d3d3d3"
                  colorTwo="#2d3436"
                />
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                  {icon.iconName === 'facebook' && (
                    <SlSocialFacebook
                      className="h-6 w-6"
                      style={{ fill: 'url(#socialIconGradient)' }}
                      title={icon.iconDescription}
                    />
                  )}
                  {icon.iconName === 'twitter' && (
                    <RiTwitterXLine
                      className="h-6 w-6"
                      style={{ fill: 'url(#socialIconGradient)' }}
                      title={icon.iconDescription}
                    />
                  )}
                  {icon.iconName === 'instagram' && (
                    <SlSocialInstagram
                      className="h-6 w-6"
                      style={{ fill: 'url(#socialIconGradient)' }}
                      title={icon.iconDescription}
                    />
                  )}
                  <div className="flex flex-col items-start">
                    <p className="text-xs capitalize">{icon.iconName}</p>
                    <p className="text-username-text text-xs">
                      {icon.userName}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <section className="flex justify-center">
        <p className="text-xs text-center w-full max-w-[22.8125rem]">
          Unsubscribed to our mailing list in error? We have you covered!{' '}
          <span>
            {/* Your Mailchimp signup form URL */}
            <Link
              className="text-link-text underline underline-offset-1"
              href="http://eepurl.com/hNVTUr"
            >
              re-subscribe
            </Link>
          </span>
        </p>
      </section>
    </section>
  );
}
