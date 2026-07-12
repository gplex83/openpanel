import { Column, Hr, Link, Row, Section, Text } from '@react-email/components';
import React from 'react';

export function Footer({ unsubscribeUrl }: { unsubscribeUrl?: string }) {
  return (
    <>
      <Hr />
      <Section className="w-full p-6">
        <Text className="text-[21px] font-regular" style={{ margin: 0 }}>
          Web- und Produkt-Analytics ohne Cookies
        </Text>

        <br />

        <Row className="mt-4">
          <Column className="w-auto">
            <Link
              href="mailto:info@komfour.de"
              style={{ fontSize: 18, textDecoration: 'none' }}
            >
              ✉ info@komfour.de
            </Link>
          </Column>
        </Row>

        <Row>
          <Text className="text-[#B8B8B8] text-xs">
            komFOUR GmbH & Co. KG
            <br />
            Hellmuth-Hirth-Straße 9
            <br />
            73760 Ostfildern
          </Text>
        </Row>

        {unsubscribeUrl && (
          <Row>
            <Link
              className="text-[#707070] text-[14px]"
              href={unsubscribeUrl}
              title="Unsubscribe"
            >
              Notification preferences
            </Link>
          </Row>
        )}
      </Section>
    </>
  );
}
