import NewsletterForm from '@/components/newsletterForm/NewsletterForm';
import NewsLetterFooter from '@/components/newsletterFooter/NewsLetterFooter';
import NewsletterHead from '@/components/newsletterHead/NewsletterHead';

export default function Home() {
  return (
    <>
      <NewsletterHead />
      <NewsletterForm />
      <NewsLetterFooter />
    </>
  );
}
