import Image from 'next/image';
import { JSX } from 'react';

import {
  Button,
  CardList,
  Chip,
  Error,
  Link,
  Logo,
  Rating,
  ResultMessage,
  Section,
  SlantedButton,
  SlantedLink,
  TextButton,
  TextLink,
} from '~/shared1/ui/atoms';
import { ArrowIcon, BookmarkIcon, StarIcon } from '~/shared1/ui/icons';
import { AuthRedirect, Footer } from '~/shared1/ui/molecules';

export default function HomePage(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button>Sign in</Button>
        <Link href="/">Link</Link>
      </div>

      <div>
        <SlantedLink href="/">Slanted Link</SlantedLink>
        <SlantedButton active>Slanted Button</SlantedButton>
      </div>

      <div>
        <TextButton>Sign out</TextButton>
        <TextLink href="/">Text Link</TextLink>
      </div>

      <Logo />

      <AuthRedirect
        href="/login"
        text="Already have an account?"
        label="Sign in"
      />

      <Footer className="mt-10" />

      <CardList cols={3}>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
      </CardList>

      <Error message="An error occurred" />

      <div>
        <StarIcon className="h-10 w-10 fill-yellow-500" />
        <ArrowIcon className="h-3 w-3 stroke-gray-900" />
        <BookmarkIcon className="h-20 w-20 fill-transparent stroke-blue-500 hover:fill-blue-500" />
      </div>

      <div>
        <Chip size="small" className="bg-yellow-500 text-white" />
        <Chip size="large" className="bg-red-500 text-white" />
      </div>

      <Section title="Ratings">
        <Rating size="small" value={2} />
        <Rating size="medium" value={3.8} className="mt-2" />
        <Rating size="large" value={5} />
      </Section>

      <ResultMessage
        message="We could not find any places to stay available at the moment"
        title="No places to stay available"
        imageComponent={
          <Image
            src="/icons/no-results.svg"
            alt="No places to stay available"
            width={45}
            height={47}
          />
        }
      />
    </div>
  );
}
