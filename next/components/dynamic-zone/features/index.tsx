import { IconRocket } from '@tabler/icons-react';
import React from 'react';

import { Container } from '../../container';
import { Heading } from '../../elements/heading';
import { Subheading } from '../../elements/subheading';
import { GradientContainer } from '../../gradient-container';
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from './card';
import { FeatureIconContainer } from './feature-icon-container';
import { SkeletonOne } from './skeletons/first';
import { SkeletonFour } from './skeletons/fourth';
import { SkeletonTwo } from './skeletons/second';
import { SkeletonThree } from './skeletons/third';
import { ExecutiveDailySkeleton } from './skeletons/executive-daily';
import { MarketIntelligenceSkeleton } from './skeletons/market-intelligence';
import { AIContentStudioSkeleton } from './skeletons/ai-content-studio';
import { TrustedAIInfrastructureSkeleton } from './skeletons/trusted-ai-infrastructure';

const wordToNumber: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
};

function convertWordToNumber(word: string) {
  return wordToNumber[word.toLowerCase()] || null;
}

export const Features = ({
  heading,
  sub_heading,
  globe_card,
  ray_card,
  graph_card,
  social_media_card,
}: {
  heading: string;
  sub_heading: string;
  globe_card: any;
  ray_card: any;
  graph_card: any;
  social_media_card: any;
}) => {
  return (
    <GradientContainer className="md:my-20">
      <Container className="py-20 max-w-7xl mx-auto  relative z-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconRocket className="h-6 w-6 text-[#111827]" />
        </FeatureIconContainer>
        <Heading className="pt-4">{heading}</Heading>
        <Subheading className="max-w-3xl mx-auto">{sub_heading}</Subheading>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
          {globe_card && (
            <Card
              className={`md:col-span-${convertWordToNumber(globe_card?.span) || '2'}`}
            >
              <CardTitle>{globe_card.title}</CardTitle>
              <CardDescription>{globe_card.description}</CardDescription>
              <CardSkeletonContainer>
                {globe_card.title === 'Executive Daily' ? (
                  <ExecutiveDailySkeleton />
                ) : (
                  <SkeletonOne />
                )}
              </CardSkeletonContainer>
            </Card>
          )}

          {ray_card && (
            <Card
              className={`md:col-span-${convertWordToNumber(ray_card?.span) || '1'}`}
            >
              <CardSkeletonContainer className="max-w-[16rem] mx-auto">
                {ray_card.title === 'AI Content Studio' ? (
                  <AIContentStudioSkeleton
                    contentTypes={ray_card.contentTypes}
                    channels={ray_card.channels}
                    contentOptions={ray_card.contentOptions}
                  />
                ) : ray_card.title === 'Market Intelligence' ? (
                  <MarketIntelligenceSkeleton subtitle={ray_card.subtitle} />
                ) : (
                  <SkeletonTwo />
                )}
              </CardSkeletonContainer>
              <CardTitle>{ray_card.title}</CardTitle>
              <CardDescription>{ray_card.description}</CardDescription>
            </Card>
          )}

          {graph_card && (
            <Card
              className={`md:col-span-${convertWordToNumber(graph_card?.span) || '2'}`}
            >
              <CardSkeletonContainer className="max-w-[16rem] mx-auto">
                {graph_card.title === 'Market Intelligence' ? (
                  <MarketIntelligenceSkeleton subtitle={graph_card.subtitle} />
                ) : graph_card.title === 'AI Content Studio' ? (
                  <AIContentStudioSkeleton
                    contentTypes={graph_card.contentTypes}
                    channels={graph_card.channels}
                    contentOptions={graph_card.contentOptions}
                  />
                ) : (
                  <SkeletonThree />
                )}
              </CardSkeletonContainer>
              <CardTitle>{graph_card.title}</CardTitle>
              <CardDescription>{graph_card.description}</CardDescription>
            </Card>
          )}

          {social_media_card && (
            <Card
              className={`md:col-span-${convertWordToNumber(social_media_card?.span) || '1'}`}
            >
              <CardSkeletonContainer>
                {social_media_card?.logos?.length ? (
                  <TrustedAIInfrastructureSkeleton />
                ) : (
                  <SkeletonFour />
                )}
              </CardSkeletonContainer>
              <CardTitle>{social_media_card.title}</CardTitle>
              <CardDescription>{social_media_card.description}</CardDescription>
            </Card>
          )}
        </div>
      </Container>
    </GradientContainer>
  );
};