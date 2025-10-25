import Link from 'next/link';
import { JSX } from 'react';

type OfferPageProps = {
  params: {
    id: string;
  };
};

export default async function OfferPage({
  params,
}: OfferPageProps): Promise<JSX.Element> {
  const { id } = await params;

  return (
    <div>
      <h1>Offer Details</h1>
      <p>Offer ID: {id}</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
