import { Link, Text } from '@react-email/components';
import React from 'react';
import { z } from 'zod';
import { Layout } from '../components/layout';
import { List } from '../components/list';
import { withUtm } from '../utm';

export const zOnboardingDashboards = z.object({
  firstName: z.string().optional(),
  dashboardUrl: z.string(),
  hasData: z.boolean().default(false),
  eventsCount: z.number().optional(),
});

const formatEvents = (count: number) =>
  new Intl.NumberFormat('en-US').format(count);

export type Props = z.infer<typeof zOnboardingDashboards>;
export default OnboardingDashboards;
export function OnboardingDashboards({
  firstName,
  dashboardUrl = 'https://analytics.komfour.de',
  hasData = false,
  eventsCount,
  unsubscribeUrl,
}: Props & { unsubscribeUrl?: string }) {
  if (!hasData) {
    return (
      <Layout unsubscribeUrl={unsubscribeUrl}>
        <Text>Hi{firstName ? ` ${firstName}` : ''},</Text>
        <Text>
          It's been a week and your project hasn't received any events, so the
          dashboard advice I'd normally send wouldn't help you yet.
        </Text>
        <Text>
          If you still want to try it out, the install is the only thing in
          the way:{' '}
          <Link
            href={withUtm(
              'https://openpanel.dev/docs/get-started/install-openpanel',
              'onboarding-dashboards',
            )}
          >
            install guide
          </Link>
          .
        </Text>
        <Text>
          If something about the product put you off, I'd like to know what.
          One line is enough.
        </Text>
        <Text>The komFOUR Team</Text>
      </Layout>
    );
  }

  return (
    <Layout unsubscribeUrl={unsubscribeUrl}>
      <Text>Hi{firstName ? ` ${firstName}` : ''},</Text>
      <Text>
        {eventsCount
          ? `You've tracked ${formatEvents(eventsCount)} events so far. The next step is making them useful.`
          : 'Your events are coming in. The next step is making them useful.'}
      </Text>
      <Text>
        Raw events don't tell you much on their own. A dashboard with two or
        three reports does:
      </Text>
      <List
        items={[
          'a funnel for your main flow',
          'a conversion trend over time',
          'where your visitors come from',
        ]}
      />
      <Text>
        Takes about ten minutes:{' '}
        <Link href={withUtm(dashboardUrl, 'onboarding-dashboards')}>
          build a dashboard
        </Link>
        .
      </Text>
      <Text>
        Once it exists you'll actually open it. That's the difference between
        having analytics and using them.
      </Text>
      <Text>The komFOUR Team</Text>
    </Layout>
  );
}

OnboardingDashboards.PreviewProps = {
  firstName: 'Alex',
  dashboardUrl: 'https://analytics.komfour.de',
  hasData: true,
  eventsCount: 48211,
};
