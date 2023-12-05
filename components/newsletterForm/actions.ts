'use server';

import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function handleSubscription(prevState: any, formData: FormData) {
  const firstname = formData.get('first-name') as string;
  const lastname = formData.get('last-name') as string;
  const subscriberEmail = formData.get('email') as string;

  try {
    // validate inputs
    if (!subscriberEmail?.length || !firstname?.length || !lastname?.length) {
      return {
        status: 'empty',
        message: 'Please fill in the required fields',
        data: null,
      };
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(subscriberEmail)) {
      return {
        status: 'invalid email',
        message: 'Please provide a valid email',
        data: null,
      };
    }
    // Check for audience id
    if (!process.env.MAILCHIMP_AUDIENCE_ID) {
      return;
    }

    /* https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/
     https://mailchimp.com/help/all-the-merge-tags-cheat-sheet/
     if audience id is present */
    const res = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: subscriberEmail.toLowerCase(),
        status: 'subscribed',
        merge_fields: {
          FNAME: firstname,
          LNAME: lastname,
        },
      }
    );

    return {
      status: 'success',
      message: 'successfully subscribed',
      data: JSON.parse(JSON.stringify(res)),
    };
  } catch (error: any) {
    return {
      status: 'failed',
      message: 'Something went wrong!',
      error: JSON.parse(JSON.stringify(error)),
    };
  }
}
