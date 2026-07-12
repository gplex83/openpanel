import { Text } from '@react-email/components';
import React from 'react';
import { z } from 'zod';
import { Layout } from '../components/layout';

export const zOnboardingFeatureRequest = z.object({
  firstName: z.string().optional(),
  hasData: z.boolean().default(true),
});

export type Props = z.infer<typeof zOnboardingFeatureRequest>;
export default OnboardingFeatureRequest;
export function OnboardingFeatureRequest({
  firstName,
  hasData = true,
  unsubscribeUrl,
}: Props & { unsubscribeUrl?: string }) {
  return (
    <Layout unsubscribeUrl={unsubscribeUrl}>
      <Text>Hi{firstName ? ` ${firstName}` : ''},</Text>
      <Text>
        You're halfway through your trial, so a quick question: is there
        anything you expected komFOUR Analytics to do that it doesn't?
      </Text>
      <Text>Just reply to this email.</Text>
      {!hasData && (
        <Text>
          And if you never got around to installing the tracking, no hard
          feelings, but I'd like to know what got in the way.
        </Text>
      )}
      <Text>The komFOUR Team</Text>
    </Layout>
  );
}

OnboardingFeatureRequest.PreviewProps = {
  firstName: 'Alex',
  hasData: true,
};
